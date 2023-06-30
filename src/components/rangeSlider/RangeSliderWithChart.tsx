import React from 'react';

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

interface RangeSliderWithChartProps {
  facets: Record<string, number>;
  selection: NumericMinMaxValue;
  initialSelection: NumericMinMaxValue;
  onChange: (values: NumericMinMaxValue) => void;
  onSliderRelease: (event: ChangeCallback) => void;
}

const RangeSliderWithChart: React.FC<RangeSliderWithChartProps> = ({
  facets,
  selection,
  initialSelection,
  onChange,
  onSliderRelease,
}) => {
  const range = Object.keys(facets)
    .map((key) => {
      const [from] = key.split('-');

      if (from === '*') {
        return 0;
      }

      return parseInt(from, 10);
    })
    .sort((a, b) => a - b);

  const toIndex = (value: number) => {
    const closestValue = range.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });

    return range.indexOf(closestValue);
  };

  const toValue = (index: number) => {
    if (index === range.length) {
      return null;
    }

    return range[index];
  };

  const toMinMax = (
    minIndex: number,
    maxIndex: number,
    previousSelection: NumericMinMaxValue
  ): NumericMinMaxValue => ({
    min: minIndex ? toValue(minIndex) : null,
    max: maxIndex ? toValue(maxIndex) : previousSelection.max,
  });

  const toRange = ({ min, max }: NumericMinMaxValue) => {
    const maxValue = max ? toIndex(max) : range.length;
    const minValue = min ? toIndex(min) : 0;

    const rangeValue: number[] = [minValue, maxValue];
    const sortedRange = [...rangeValue].sort((a, b) => a - b);

    return JSON.stringify(rangeValue) === JSON.stringify(sortedRange)
      ? rangeValue
      : [minValue, minValue];
  };

  // check this
  // current implementation depend of update of initialSelection by outside
  const getChangedThumb = (
    initial: number[],
    current: number[]
  ): 'max' | 'min' | null => {
    const [initialMinIndex, initialMaxIndex] = initial;
    const [currentMinIndex, currentMaxIndex] = current;
    if (
      initialMinIndex === currentMinIndex &&
      initialMaxIndex === currentMaxIndex
    ) {
      return null;
    } else {
      return initialMinIndex !== currentMinIndex ? 'min' : 'max';
    }
  };

  const handleChangeEnd = ([newMinIndex, newMaxIndex]: number[]) => {
    const changedThumb = getChangedThumb(toRange(initialSelection), [
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
      <Box position="relative" top="sm">
        <Chart range={toRange(selection)} facets={facets} />
      </Box>
      <RangeSlider
        step={1}
        min={0}
        max={range.length}
        onChange={([newMinIndex, newMaxIndex]) => {
          onChange(toMinMax(newMinIndex, newMaxIndex, selection));
        }}
        onChangeEnd={handleChangeEnd}
        value={toRange(selection)}
      />
    </>
  );
};

export default RangeSliderWithChart;
