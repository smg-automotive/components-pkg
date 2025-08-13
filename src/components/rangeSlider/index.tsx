import React, { FC } from 'react';
import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderProps as ChakraRangeSliderProps,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';

export type RangeSliderProps = ChakraRangeSliderProps;

const RangeSlider: FC<RangeSliderProps> = ({
  min = 0,
  max = 10,
  ...restProps
}) => (
  <ChakraRangeSlider
    aria-label={['min', 'max']}
    defaultValue={[min, max]}
    min={min}
    max={max}
    {...restProps}
  >
    <RangeSliderTrack bg="gray.200">
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb boxSize={{ base: 32, sm: 24 }} index={0} />
    <RangeSliderThumb boxSize={{ base: 32, sm: 24 }} index={1} />
  </ChakraRangeSlider>
);

export default RangeSlider;
