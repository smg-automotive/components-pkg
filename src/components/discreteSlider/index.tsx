import React from 'react';
import {
  Slider as ChakraSlider,
  SliderMark as ChakraSliderMark,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

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

const getSliderStepValue = <T,>(
  marks: SliderMark<T>[],
  applyIndentation: boolean,
  value: T,
) => {
  const selectedMarkIndex = marks.findIndex((mark) => mark.value === value);
  const stepIndexOffset = applyIndentation ? firstItemOffset : emptyItemOffset;
  if (selectedMarkIndex < emptyItemOffset) {
    return stepIndexOffset;
  }
  return selectedMarkIndex + stepIndexOffset;
};

const getSliderMarks = <T,>(
  marks: SliderMark<T>[],
  applyIndentation: boolean,
) =>
  marks.map((mark, index) => ({
    ...mark,
    stepValue: index + Number(applyIndentation),
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
      max={sliderMarks.length - Number(!applyIndentation)}
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
          >
            {label}
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
