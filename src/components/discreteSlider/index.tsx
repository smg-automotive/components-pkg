import React from 'react';
import {
  Slider as ChakraSlider,
  SliderMark as ChakraSliderMark,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

import Box from '../box';

const emptyItemOffset = 0;
const firstItemOffset = 1;

type SliderMark<T> = {
  stepValue?: number;
  label: string;
  value: T;
};

type SliderProps<T> = {
  applyIndentation?: boolean;
  marks: SliderMark<T>[];
  value: T;
  onValueChanged: (arg: T) => void;
};

const getItemOffset = (applyIndentation: boolean) => {
  return applyIndentation ? firstItemOffset : emptyItemOffset;
};

const getSliderStepValue = <T,>(
  marks: SliderMark<T>[],
  applyIndentation: boolean,
  value: T,
) => {
  const selectedMarkIndex = marks.findIndex((mark) => mark.value === value);
  if (selectedMarkIndex < emptyItemOffset) {
    return getItemOffset(applyIndentation);
  }
  return selectedMarkIndex + getItemOffset(applyIndentation);
};

const getSliderMarks = <T,>(
  marks: SliderMark<T>[],
  applyIndentation: boolean,
) =>
  marks.map((mark, index) => ({
    ...mark,
    stepValue: index + getItemOffset(applyIndentation),
  }));

const DiscreteSlider = <T,>({
  marks,
  applyIndentation = true,
  onValueChanged,
  value,
}: SliderProps<T>) => {
  const sliderStepValue = getSliderStepValue(marks, applyIndentation, value);

  const sliderMarks = getSliderMarks(marks, applyIndentation);

  const handleOnChange = (newStepValue: number) => {
    const newSliderMark = sliderMarks.find(
      (mark) => mark.stepValue === newStepValue,
    )?.value;

    onValueChanged(newSliderMark as NonNullable<T>);
  };

  return (
    <ChakraSlider
      step={1}
      max={sliderMarks.length - 1 + getItemOffset(applyIndentation)}
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
          >
            <Box style={{ pointerEvents: 'all' }}>{label}</Box>
          </ChakraSliderMark>
        );
      })}
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  );
};

export default DiscreteSlider;
