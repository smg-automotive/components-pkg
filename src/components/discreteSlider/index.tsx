import React from 'react';
import {
  Slider as ChakraSlider,
  SliderMark as ChakraSliderMark,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

import { useSliderStepState } from './hooks/useSliderStepValue';

export type SliderMark<T> = {
  stepValue?: number;
  label: string;
  value: T;
};

export type SliderProps<T> = {
  applyIndentation?: boolean;
  marks: SliderMark<T>[];
  defaultMark: SliderMark<T>;
  onValueChanged: (arg: T) => void;
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
  const [sliderStepValue, setSliderStepValue] = useSliderStepState({
    step,
    applyIndentation,
    marks,
    defaultMark,
  });

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
      max={(sliderMarks.length - Number(!applyIndentation)) * step}
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
            mt={'2xl'}
            fontSize={'sm'}
          >
            {label}
          </ChakraSliderMark>
        );
      })}
      <SliderTrack>
        <SliderFilledTrack bg={'gray.900'} />
      </SliderTrack>
      <SliderThumb boxSize={'sm'} />
    </ChakraSlider>
  );
};

export default DiscreteSlider;
