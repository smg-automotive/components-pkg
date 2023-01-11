import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import {
  autoScout24Theme,
  immoScout24Theme,
  motoScout24Theme,
} from '../../themes';

export type Props = {
  // Theme to use
  theme: 'as24' | 'ms24' | 'is24';
};

const themes = {
  as24: autoScout24Theme,
  ms24: motoScout24Theme,
  is24: immoScout24Theme,
};

const ThemeProvider: FC<PropsWithChildren<Props>> = ({ theme, children }) => {
  return (
    <ChakraProvider theme={themes[theme]} resetCSS={true}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
