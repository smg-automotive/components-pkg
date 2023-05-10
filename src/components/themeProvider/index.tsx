import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import { autoScout24Theme, motoScout24Theme } from 'src/themes';

export type Props = {
  // Theme to use
  theme: Brand;
  cssVarsRoot?: string;
};

const themes = {
  [Brand.AutoScout24]: autoScout24Theme,
  [Brand.MotoScout24]: motoScout24Theme,
};

const ThemeProvider: FC<PropsWithChildren<Props>> = ({
  theme,
  children,
  cssVarsRoot,
}) => {
  return (
    <ChakraProvider
      theme={themes[theme]}
      resetCSS={true}
      cssVarsRoot={cssVarsRoot}
    >
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
