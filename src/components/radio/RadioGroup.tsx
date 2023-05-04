import React, { forwardRef } from 'react';
import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps,
} from '@chakra-ui/react';

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  (props, ref) => <ChakraRadioGroup {...props} ref={ref} />
);
RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
