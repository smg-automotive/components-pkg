import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Brand } from '@/src/types/brand';

import { theme as motoScout24Theme } from '@/src/themes/motoscout24';
import { theme as autoScout24Theme } from '@/src/themes/autoscout24';

export type Props = {
  // Theme to use
  theme: Brand;
};

const themes = {
  [Brand.AutoScout24]: autoScout24Theme,
  [Brand.MotoScout24]: motoScout24Theme,
};

const ThemeProvider: FC<PropsWithChildren<Props>> = ({ theme, children }) => {
  return (
    <ChakraProvider theme={themes[theme]} resetCSS={true}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
