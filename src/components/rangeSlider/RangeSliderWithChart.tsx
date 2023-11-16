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
  onSliderChange: (values: NumericMinMaxValue) => void;
  onSliderRelease: (event: ChangeCallback) => void;
}

const RangeSliderWithChart: React.FC<RangeSliderWithChartProps> = ({
  facets,
  selection,
  onSliderChange,
  onSliderRelease,
}) => {
  const [startRange, setStartRange] = useState<number[]>([]);

  const sortedFacetsByFromKey = facets.sort((a, b) => a.from - b.from);

  const scale = sortedFacetsByFromKey.map(({ from }) => from);

  const toIndex = (value: number) => {
    const closestValue = scale.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });

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

  const handleChangeEnd = ([newMinIndex, newMaxIndex]: number[]) => {
    const changedThumb = getChangedThumb(startRange, [
      newMinIndex,
      newMaxIndex,
    ]);
    if (changedThumb) {
      onSliderRelease({
        touched: changedThumb,
        value: toMinMax(newMinIndex, newMaxIndex, selection),
      });
    }
  };

  return (
    <>
      <Box position="relative" top="sm" h="3xl">
        <Chart range={toRange(selection)} facets={sortedFacetsByFromKey} />
      </Box>
      <RangeSlider
        step={1}
        min={0}
        max={scale.length}
        onChange={([newMinIndex, newMaxIndex]) => {
          onSliderChange(toMinMax(newMinIndex, newMaxIndex, selection));
        }}
        onChangeEnd={handleChangeEnd}
        onChangeStart={setStartRange}
        value={toRange(selection)}
      />
    </>
  );
};

export default RangeSliderWithChart;
