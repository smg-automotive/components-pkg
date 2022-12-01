import React, { FC } from 'react';
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react';

export type SwitchProps = Pick<ChakraSwitchProps, 'onChange' | 'isChecked'>;

const Switch: FC<SwitchProps> = ({ onChange, isChecked }) => {
  return (
    <ChakraSwitch
      onChange={onChange}
      isChecked={isChecked}
      variant="themeSwitch"
    />
  );
};
export default Switch;
