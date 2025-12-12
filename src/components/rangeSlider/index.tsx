'use client';

import React from 'react';
import { Slider } from '@chakra-ui/react';

type SliderRootProps = Omit<
  React.ComponentProps<typeof Slider.Root>,
  'onChange'
>;

export type RangeSliderProps = SliderRootProps & {
  onChange?: (values: number[]) => void;
  onChangeEnd?: (values: number[]) => void;
};

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 10,
  onChange,
  onChangeEnd,
  ...rest
}) => {
  return (
    <Slider.Root
      defaultValue={[min, max]}
      min={min}
      max={max}
      onValueChange={(details) => onChange?.(details.value)}
      onValueChangeEnd={(details) => onChangeEnd?.(details.value)}
      {...rest}
    >
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} aria-label="Minimum value" />
        <Slider.Thumb index={1} aria-label="Maximum value" />
      </Slider.Control>
    </Slider.Root>
  );
};
