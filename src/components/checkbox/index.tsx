import React, { ChangeEvent, FC } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface Props {
  name: string;
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  iconColor?: string;
  isInvalid?: boolean;
}

const Checkbox: FC<Props> = ({
  name,
  value,
  isDisabled = false,
  isChecked = false,
  onChange,
  label,
  iconColor = 'gray.900',
  isInvalid,
}) => (
  <ChakraCheckbox
    name={name}
    value={value}
    isDisabled={isDisabled}
    isChecked={isChecked}
    onChange={onChange}
    iconColor={isDisabled ? 'gray.400' : iconColor}
    isInvalid={isInvalid}
  >
    {label}
  </ChakraCheckbox>
);

export default Checkbox;
