import React, { ChangeEvent, FC } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface Props {
  name: string;
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  isInvalid?: boolean;
}

const Checkbox: FC<Props> = ({
  name,
  value,
  isDisabled = false,
  isChecked = false,
  onChange,
  label,
  isInvalid,
}) => (
  <ChakraCheckbox
    name={name}
    value={value}
    isDisabled={isDisabled}
    isChecked={isChecked}
    onChange={onChange}
    isInvalid={isInvalid}
  >
    {label}
  </ChakraCheckbox>
);

export default Checkbox;
