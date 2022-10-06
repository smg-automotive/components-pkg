import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { autoScout24Theme, motoScout24Theme } from '../../themes';
import { Fonts } from '../../styles/Fonts';

export type Props = {
  // Theme to use
  theme: 'as24' | 'ms24';
};

const themes = {
  as24: autoScout24Theme,
  ms24: motoScout24Theme,
};

const ThemeProvider: FC<PropsWithChildren<Props>> = ({ theme, children }) => {
  return (
    <ChakraProvider theme={themes[theme]} resetCSS={true}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
