import React, { ChangeEvent, FC, ReactNode } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface Props {
  name: string;
  value?: string;
  children: ReactNode;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<Props> = ({
  name,
  value,
  children,
  isDisabled = false,
  isChecked = false,
  onChange,
}) => (
  <ChakraCheckbox
    name={name}
    value={value}
    isDisabled={isDisabled}
    isChecked={isChecked}
    onChange={onChange}
  >
    {children}
  </ChakraCheckbox>
);

export default Checkbox;
