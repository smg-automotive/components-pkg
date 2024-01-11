import { Dispatch, SetStateAction, useState } from 'react';

import { SliderMark } from '../index';

type UseSliderStepStateProps<T> = {
  step: number;
  applyIndentation: boolean;
  marks: SliderMark<T>[];
  defaultMark: SliderMark<T>;
};

const getDefaultStepValue = <T>(
  marks: SliderMark<T>[],
  step: number = 1,
  applyIndentation: boolean = false,
  defaultMark: SliderMark<T>,
) => {
  const defaultStep = step - Number(!applyIndentation);
  const defaultMarkIndex = defaultMark ? marks.indexOf(defaultMark) : 0;
  const indexAdjustment = Number(applyIndentation);
  return (defaultMarkIndex + indexAdjustment) * step || defaultStep;
};

export const useSliderStepState = <T>({
  step,
  applyIndentation,
  marks,
  defaultMark,
}: UseSliderStepStateProps<T>): [number, Dispatch<SetStateAction<number>>] => {
  const defaultStepValue = getDefaultStepValue(
    marks,
    step,
    applyIndentation,
    defaultMark,
  );
  const [sliderStepValue, setSliderStepValue] = useState(defaultStepValue);

  return [sliderStepValue, setSliderStepValue];
};
