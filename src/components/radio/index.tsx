import React, { ChangeEvent, forwardRef } from 'react';
import { Radio as ChakraRadio, RadioGroup } from '@chakra-ui/react';

interface Props {
  name?: string;
  value: string;
  label?: string;
  size?: 'sm' | 'md';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
}

const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      label,
      size = 'md',
      onChange,
      isChecked = false,
      isInvalid,
      isDisabled = false,
    },
    ref,
  ) => {
    return (
      <ChakraRadio
        name={name}
        value={value}
        size={size}
        onChange={onChange}
        isChecked={isChecked}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        ref={ref}
      >
        {label}
      </ChakraRadio>
    );
  },
);
Radio.displayName = 'Radio';

export default Radio;
export { RadioGroup };
