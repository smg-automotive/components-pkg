import React, { FC, ReactNode } from 'react';
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export type SwitchProps = Pick<
  ChakraSwitchProps,
  'onChange' | 'isChecked' | 'isDisabled'
> & {
  id: string;
  label: ReactNode;
};

const Switch: FC<SwitchProps> = ({
  id,
  onChange,
  isChecked,
  isDisabled,
  label,
}) => {
  return (
    <FormControl display="flex" alignItems="center" isDisabled={isDisabled}>
      <ChakraSwitch
        id={id}
        onChange={onChange}
        isChecked={isChecked}
        isDisabled={isDisabled}
        mr="sm"
      />
      <FormLabel fontWeight="regular" htmlFor={id} mb={0}>
        {label}
      </FormLabel>
    </FormControl>
  );
};
export default Switch;
