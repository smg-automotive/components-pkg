import React, { FC } from 'react';
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react';

export type SwitchProps = Pick<ChakraSwitchProps, 'onChange'>;

const Switch: FC<SwitchProps> = ({ onChange }) => {
  return (
    <>
      <span>🚗</span>
      &nbsp;
      <ChakraSwitch onChange={onChange} variant="themeSwitch" />
      &nbsp;
      <span>🏍️</span>
    </>
  );
};
export default Switch;
