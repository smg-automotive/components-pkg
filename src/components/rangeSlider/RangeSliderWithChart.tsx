import React, { useState } from 'react';

import Box from '../box';
import Chart from './Chart';

import RangeSlider from './';

export type NumericMinMaxValue = {
  min: number | null | undefined;
  max: number | null | undefined;
};

export type ChangeCallback = {
  touched: 'min' | 'max';
  value: NumericMinMaxValue;
};

export type Facet = {
  from: number;
  to?: number | null;
  value: number;
};

interface RangeSliderWithChartProps {
  facets: Array<Facet>;
  selection: NumericMinMaxValue;
  onSliderChange: (event: ChangeCallback) => void;
  onSliderRelease: (event: ChangeCallback) => void;
  chartHeight?: 'sm' | 'normal';
}

const RangeSliderWithChart: React.FC<RangeSliderWithChartProps> = ({
  facets,
  selection,
  onSliderChange,
  onSliderRelease,
  chartHeight = 'normal',
}) => {
  const [startRange, setStartRange] = useState<number[] | null>(null);

  const sortedFacetsByFromKey = facets.sort((a, b) => a.from - b.from);

  const scale = sortedFacetsByFromKey.map(({ from }) => from);

  const toIndex = (value: number) => {
    const closestValue = scale.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    }, 0);

    return scale.indexOf(closestValue);
  };

  const toValue = (index: number) => {
    if (index === scale.length) {
      return null;
    }

    return scale[index];
  };

  const toMinMax = (
    minIndex: number,
    maxIndex: number,
    previousSelection: NumericMinMaxValue,
  ): NumericMinMaxValue => ({
    min: minIndex ? toValue(minIndex) : null,
    max: maxIndex ? toValue(maxIndex) : previousSelection.max,
  });

  const toRange = ({ min, max }: NumericMinMaxValue) => {
    const maxValue = max ? toIndex(max) : scale.length;
    const minValue = min ? toIndex(min) : 0;

    const range: number[] = [minValue, maxValue];
    const sortedRange = [...range].sort((a, b) => a - b);

    return JSON.stringify(range) === JSON.stringify(sortedRange)
      ? range
      : [minValue, minValue];
  };

  const getChangedThumb = (
    initial: number[],
    current: number[],
  ): 'max' | 'min' | null => {
    const [initialMinIndex, initialMaxIndex] = initial;
    const [currentMinIndex, currentMaxIndex] = current;
    if (
      initialMinIndex === currentMinIndex &&
      initialMaxIndex === currentMaxIndex
    ) {
      return null;
    }

    return initialMinIndex !== currentMinIndex ? 'min' : 'max';
  };

  const getChangeEvent = ([
    newMinIndex,
    newMaxIndex,
  ]: number[]): ChangeCallback | null => {
    const changedThumb = getChangedThumb(
      startRange ? startRange : toRange(selection),
      [newMinIndex, newMaxIndex],
    );

    if (!changedThumb) return null;

    return {
      touched: changedThumb,
      value: toMinMax(newMinIndex, newMaxIndex, selection),
    };
  };

  const handleChange = (
    newValues: number[],
    callback: (event: ChangeCallback) => void,
  ) => {
    const changeEvent = getChangeEvent(newValues);
    if (changeEvent) {
      callback(changeEvent);
    }
  };

  return (
    <>
      <Box
        position="relative"
        top="sm"
        h={chartHeight === 'sm' ? '2xl' : '3xl'}
      >
        <Chart range={toRange(selection)} facets={sortedFacetsByFromKey} />
      </Box>
      <RangeSlider
        h="sm"
        step={1}
        min={0}
        max={scale.length}
        onChange={(newValues) => handleChange(newValues, onSliderChange)}
        onChangeEnd={(newValues) => {
          const callback = (event: ChangeCallback) => {
            onSliderRelease(event);
            setStartRange(newValues);
          };
          handleChange(newValues, callback);
        }}
        onChangeStart={setStartRange}
        value={toRange(selection)}
      />
    </>
  );
};

export default RangeSliderWithChart;
