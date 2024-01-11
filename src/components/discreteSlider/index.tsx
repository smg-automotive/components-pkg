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
  applyIndentation?: boolean;
  marks: SliderMark<T>[];
  defaultMark: SliderMark<T>;
  onValueChanged: (arg: T) => void;
};

const getDefaultStepValue = <T,>(
  marks: SliderMark<T>[],
  step: number = 1,
  applyIndentation: boolean = false,
  defaultMark: SliderMark<T>,
) => {
  return (
    (defaultMark && (marks.indexOf(defaultMark) + +applyIndentation) * step) ||
    step - +!applyIndentation
  );
};

const getSliderMarks = <T,>(
  marks: SliderMark<T>[],
  step: number = 1,
  applyIndentation: boolean = false,
) =>
  marks.map((mark, index) => ({
    ...mark,
    stepValue: (index + +applyIndentation) * step,
  }));

const step = 1;
const DiscreteSlider = <T,>({
  marks,
  applyIndentation = false,
  onValueChanged = () => {},
  defaultMark,
}: SliderProps<T>) => {
  const defaultStepValue = getDefaultStepValue(
    marks,
    step,
    applyIndentation,
    defaultMark,
  );
  const [sliderStepValue, setSliderStepValue] =
    useState<number>(defaultStepValue);

  const sliderMarks = getSliderMarks(marks, step, applyIndentation);
  const handleOnChange = (val: number) => {
    let stepValue = val;
    if (val < step && applyIndentation) stepValue = step;

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
      max={(sliderMarks.length - +!applyIndentation) * step}
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
            ml={`-${label.length}%`}
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
