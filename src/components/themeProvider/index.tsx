import React, { FC, PropsWithChildren } from 'react';
import { toCSSVar } from '@chakra-ui/styled-system';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { autoScout24Theme, motoScout24Theme } from '../../themes';

export type Props = {
  // Theme to use
  theme: 'as24' | 'ms24';
};

const themes = {
  as24: autoScout24Theme,
  ms24: motoScout24Theme,
};

console.log('autoScout24Theme', autoScout24Theme);
console.log('autoScout24Theme', toCSSVar(autoScout24Theme));

const ThemeProvider: FC<PropsWithChildren<Props>> = ({ theme, children }) => (
  <ChakraProvider theme={themes[theme]}>
    <CSSReset />
    {children}
  </ChakraProvider>
);

export default ThemeProvider;
