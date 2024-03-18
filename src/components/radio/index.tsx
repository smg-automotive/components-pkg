import React, { ChangeEvent, forwardRef, ReactNode } from 'react';
import { Radio as ChakraRadio, RadioGroup } from '@chakra-ui/react';

interface Props {
  name?: string;
  value: string;
  label?: ReactNode;
  size?: 'sm' | 'md';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  variant?: 'fontRegular' | 'fontBold';
}

const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      label,
      size = 'base',
      onChange,
      isChecked = false,
      isInvalid,
      isDisabled = false,
      variant = 'fontRegular',
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
        variant={variant}
      >
        {label}
      </ChakraRadio>
    );
  },
);
Radio.displayName = 'Radio';

export default Radio;
export { RadioGroup };
