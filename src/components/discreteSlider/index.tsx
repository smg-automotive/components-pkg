import React, { ReactNode } from 'react';
import { Slider } from '@chakra-ui/react';

const emptyItemOffset = 0;
const firstItemOffset = 1;

export type DiscreteSliderMark<T> = {
  label: ReactNode;
  value: T;
};

export type DiscreteSliderProps<T> = {
  applyIndentation?: boolean;
  marks: DiscreteSliderMark<T>[];
  value: T;
  onValueChanged: (arg: T) => void;
};

const getItemOffset = (applyIndentation: boolean) => {
  return applyIndentation ? firstItemOffset : emptyItemOffset;
};

const getSliderStepValue = <T,>(
  marks: DiscreteSliderMark<T>[],
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
  marks: DiscreteSliderMark<T>[],
  applyIndentation: boolean,
) =>
  marks.map((mark, index) => ({
    ...mark,
    value: index + getItemOffset(applyIndentation),
  }));

export const DiscreteSlider = <T,>({
  marks,
  applyIndentation = true,
  onValueChanged,
  value,
}: DiscreteSliderProps<T>) => {
  const sliderStepValue = getSliderStepValue(marks, applyIndentation, value);

  const sliderMarks = getSliderMarks(marks, applyIndentation);

  const handleOnChange = (newStepValue: number) => {
    if (applyIndentation && newStepValue < firstItemOffset) return;

    const newSliderMark = sliderMarks.find(
      (mark) => mark.value === newStepValue,
    )?.value;

    onValueChanged(newSliderMark as NonNullable<T>);
  };

  return (
    <Slider.Root
      step={1}
      max={sliderMarks.length - 1 + getItemOffset(applyIndentation)}
      value={[sliderStepValue]}
      // onChange={handleOnChange}
      // focusThumbOnChange={false}
    >
      <Slider.Control>
        <Slider.Track>
          <Slider.Marks marks={sliderMarks} />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
    </Slider.Root>
  );
};
