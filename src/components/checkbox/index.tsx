import React, { ChangeEvent, FC, ReactNode } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface Props {
  name: string;
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  renderLabel?: ReactNode;
}

const Checkbox: FC<Props> = ({
  name,
  value,
  isDisabled = false,
  isChecked = false,
  onChange,
  renderLabel,
}) => (
  <ChakraCheckbox
    name={name}
    value={value}
    isDisabled={isDisabled}
    isChecked={isChecked}
    onChange={onChange}
  >
    {renderLabel}
  </ChakraCheckbox>
);

export default Checkbox;
