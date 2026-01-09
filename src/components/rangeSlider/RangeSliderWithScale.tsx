'use client';

import React, { useRef } from 'react';

import { RangeSlider } from '.';

export type NumericMinMaxValue = {
  min: number | null | undefined;
  max: number | null | undefined;
};

export type ChangeCallback = {
  touched: 'min' | 'max';
  value: NumericMinMaxValue;
};

interface RangeSliderWithScaleProps {
  /**
   * Array of numbers that represents the custom scale of the range slider
   * @example [0, 100, 200, 300, 400]
   * @default []
   * @required
   */
  scale: number[];
  /**
   * Object that contains the min and max values of the range slider
   * @example { min: 0, max: 100 }
   * @default { min: null, max: null }
   * @required
   */
  selection: NumericMinMaxValue;
  /**
   * Callback function that is triggered when slider is moving
   * @param event     contains touched - what thumb is moved and value
   */
  onSliderChange: (event: ChangeCallback) => void;
  /**
   * Callback function that is triggered when slider is released
   * @param event     contains touched - what thumb is moved and value
   */
  onSliderRelease: (event: ChangeCallback) => void;
  /**
   * Function that renders the chart with wrapper
   * @param range     contains the range of the slider
   * @returns         the chart component
   * @example         (range: number[]) => <Chart range={range} />
   * @default         null
   */
  renderChart?: (range: number[]) => React.ReactNode;
}

export const RangeSliderWithScale: React.FC<RangeSliderWithScaleProps> = ({
  scale,
  selection,
  onSliderChange,
  onSliderRelease,
  renderChart,
}) => {
  // snapshot range at the start of interaction (first onChange)
  const startRangeRef = useRef<number[] | null>(null);

  const sortedScale = [...scale].sort((a, b) => a - b);

  const toIndex = (value: number) => {
    const closestValue = sortedScale.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    }, 0);

    return sortedScale.indexOf(closestValue);
  };

  const toValue = (index: number) => {
    if (index === sortedScale.length) return null;
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

  const getChangeEvent = (newValues: number[]): ChangeCallback | null => {
    const baseline = startRangeRef.current ?? toRange(selection);
    const changedThumb = getChangedThumb(baseline, newValues);
    if (!changedThumb) return null;

    const [newMinIndex, newMaxIndex] = newValues;

    return {
      touched: changedThumb,
      value: toMinMax(newMinIndex, newMaxIndex, selection),
    };
  };

  const handleChange = (
    newValues: number[],
    callback: (event: ChangeCallback) => void,
  ) => {
    // capture baseline once, at the first movement
    if (!startRangeRef.current) {
      startRangeRef.current = toRange(selection);
    }

    const changeEvent = getChangeEvent(newValues);
    if (changeEvent) {
      callback(changeEvent);
    }
  };

  const handleChangeEnd = (
    newValues: number[],
    callback: (event: ChangeCallback) => void,
  ) => {
    // ensure baseline exists even if Chakra only fires changeEnd in some cases
    if (!startRangeRef.current) {
      startRangeRef.current = toRange(selection);
    }

    const changeEvent = getChangeEvent(newValues);
    if (changeEvent) {
      callback(changeEvent);
    }

    // reset baseline after interaction
    startRangeRef.current = null;
  };

  return (
    <>
      {renderChart ? renderChart(toRange(selection)) : null}
      <RangeSlider
        h="sm"
        step={1}
        min={0}
        max={sortedScale.length}
        value={toRange(selection)}
        onChange={(newValues: number[]) =>
          handleChange(newValues, onSliderChange)
        }
        onChangeEnd={(newValues: number[]) =>
          handleChangeEnd(newValues, (event) => {
            onSliderRelease(event);
          })
        }
      />
    </>
  );
};
