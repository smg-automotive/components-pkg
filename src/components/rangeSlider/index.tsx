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
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </ChakraRangeSlider>
);

export default RangeSlider;
