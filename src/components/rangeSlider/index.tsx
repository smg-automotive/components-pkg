import React, { FC } from 'react';
import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderProps as ChakraRangeSliderProps,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';

type RangeSliderProps = RangeSliderProps & ChakraRangeSliderProps;

const RangeSlider: FC<RangeSliderProps> = ({ min, max, ...restProps }) => (
  <ChakraRangeSlider
    aria-label={['min', 'max']}
    defaultValue={[min, max]}
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
