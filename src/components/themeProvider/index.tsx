import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import { autoScout24System, motoScout24System } from 'src/themes';

export type Props = {
  // Theme to use
  theme: Brand;
};

const themes = {
  [Brand.AutoScout24]: autoScout24System,
  [Brand.MotoScout24]: motoScout24System,
};

const ThemeProvider: FC<PropsWithChildren<Props>> = ({ children, theme }) => {
  return <ChakraProvider value={themes[theme]}>{children}</ChakraProvider>;
};

export default ThemeProvider;
