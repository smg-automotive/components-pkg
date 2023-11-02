import React, { FC } from 'react';
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react';

export type SwitchProps = Pick<
  ChakraSwitchProps,
  'onChange' | 'isChecked' | 'variant'
>;

const Switch: FC<SwitchProps> = ({ onChange, isChecked, variant }) => {
  return (
    <ChakraSwitch onChange={onChange} isChecked={isChecked} variant={variant} />
  );
};
export default Switch;
