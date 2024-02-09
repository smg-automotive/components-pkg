import React, { useState } from 'react';

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

interface RangeSliderWithScaleProps {
  scale: Array<number>;
  selection: NumericMinMaxValue;
  onSliderChange: (event: ChangeCallback) => void;
  onSliderRelease: (event: ChangeCallback) => void;
  renderChart?: (range: number[]) => React.ReactNode;
}

const RangeSliderWithScale: React.FC<RangeSliderWithScaleProps> = ({
  scale,
  selection,
  onSliderChange,
  onSliderRelease,
  renderChart,
}) => {
  const [startRange, setStartRange] = useState<number[] | null>(null);
  const sortedScale = scale.sort((a, b) => a - b);

  const toIndex = (value: number) => {
    const closestValue = sortedScale.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    }, 0);

    return sortedScale.indexOf(closestValue);
  };

  const toValue = (index: number) => {
    if (index === sortedScale.length) {
      return null;
    }

    return sortedScale[index];
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
    const maxValue = max ? toIndex(max) : sortedScale.length;
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
    const changedThumb = getChangedThumb(startRange || toRange(selection), [
      newMinIndex,
      newMaxIndex,
    ]);

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
      {renderChart ? renderChart(toRange(selection)) : null}
      <RangeSlider
        h="sm"
        step={1}
        min={0}
        max={sortedScale.length}
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

export default RangeSliderWithScale;
