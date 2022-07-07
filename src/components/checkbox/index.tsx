import React, { ChangeEvent, FC } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface Props {
  name: string;
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Checkbox: FC<Props> = ({
  name,
  value,
  isDisabled = false,
  isChecked = false,
  onChange,
  label,
}) => (
  <ChakraCheckbox
    name={name}
    value={value}
    isDisabled={isDisabled}
    isChecked={isChecked}
    onChange={onChange}
  >
    {label}
  </ChakraCheckbox>
);

export default Checkbox;
