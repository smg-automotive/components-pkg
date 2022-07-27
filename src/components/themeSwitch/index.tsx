import React, { FC } from 'react';
import { Switch } from '@chakra-ui/react';

interface ThemeSwitchProps {
  foo?: string;
}

const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  return (
    <>
      <Switch colorScheme="red" />
    </>
  );
};

export default ThemeSwitch;
export { ThemeSwitchProps };
