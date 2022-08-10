import React, { FC } from 'react';
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react';

export type SwitchProps = Pick<ChakraSwitchProps, 'onChange'>;

const Switch: FC<SwitchProps> = ({ onChange }) => {
  return <ChakraSwitch onChange={onChange} variant="themeSwitch" />;
};
export default Switch;
