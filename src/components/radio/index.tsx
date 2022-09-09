import React, { ChangeEvent, FC } from 'react';
import { Radio as ChakraRadio } from '@chakra-ui/react';

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

const Radio: FC<Props> = ({
  name,
  value,
  label,
  size = 'md',
  onChange,
  isChecked = false,
  isInvalid,
  isDisabled = false,
}) => {
  return (
    <ChakraRadio
      name={name}
      value={value}
      size={size}
      onChange={onChange}
      isChecked={isChecked}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
    >
      {label}
    </ChakraRadio>
  );
};

export default Radio;
