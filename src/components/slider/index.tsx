import React, { useState } from 'react';
import {
  Slider as ChakraSlider,
  SliderMark as ChakraSliderMark,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

type SliderMark<T> = {
  stepValue?: number;
  label: string;
  value: T;
};

type SliderProps<T> = {
  useIndentation?: boolean;
  marks: SliderMark<T>[];
  defaultValue: SliderMark<T>;
  onValueChanged: (arg: T) => void;
};

const getDefaultStepValue = <T,>(
  marks: SliderMark<T>[],
  step: number = 1,
  useIndentation: boolean = false,
  defaultValue: SliderMark<T>,
) => {
  return (
    (defaultValue && (marks.indexOf(defaultValue) + +useIndentation) * step) ||
    step - +!useIndentation
  );
};

const getSliderMarks = <T,>(
  marks: SliderMark<T>[],
  step: number = 1,
  useIndentation: boolean = false,
) =>
  marks.map((mark, index) => ({
    ...mark,
    stepValue: (index + +useIndentation) * step,
  }));

const step = 1;
const DiscreteSlider = <T,>({
  marks,
  useIndentation = false,
  onValueChanged = () => {},
  defaultValue,
}: SliderProps<T>) => {
  const defaultStepValue = getDefaultStepValue(
    marks,
    step,
    useIndentation,
    defaultValue,
  );
  const [sliderStepValue, setSliderStepValue] =
    useState<number>(defaultStepValue);

  const sliderMarks = getSliderMarks(marks, step, useIndentation);
  const handleOnChange = (val: number) => {
    let stepValue = val;
    if (val < step && useIndentation) stepValue = step;

    const selectedObject = sliderMarks.find(
      (mark) => mark.stepValue === stepValue,
    );
    const valueToUse = (selectedObject?.value as NonNullable<T>) ?? stepValue;

    onValueChanged(valueToUse);
    setSliderStepValue(stepValue);
  };

  return (
    <ChakraSlider
      step={step}
      max={(sliderMarks.length - +!useIndentation) * step}
      value={sliderStepValue}
      onChange={handleOnChange}
      focusThumbOnChange={false}
    >
      {sliderMarks?.map(({ stepValue, label }, index) => {
        return (
          <ChakraSliderMark
            key={index}
            value={stepValue as number}
            fontWeight={sliderStepValue === stepValue ? 'bold' : 'normal'}
            ml={`-${label.length * 3.85}`}
            mt={'25'}
            fontSize={'sm'}
          >
            {label}
          </ChakraSliderMark>
        );
      })}
      <SliderTrack>
        <SliderFilledTrack bg={'gray.900'} />
      </SliderTrack>
      <SliderThumb boxSize={24} />
    </ChakraSlider>
  );
};

export default DiscreteSlider;
