import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import { autoScout24System, motoScout24System } from 'src/themes';

export type ThemeProviderProps = {
  /**
   * The brand theme to use
   */
  theme: Brand;
};

const themes = {
  [Brand.AutoScout24]: autoScout24System,
  [Brand.MotoScout24]: motoScout24System,
};

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
}) => {
  return <ChakraProvider value={themes[theme]}>{children}</ChakraProvider>;
};
