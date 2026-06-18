import React, { type FC, type PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/src/themes/motoscout24';

export type MotoScout24ThemeProviderProps = PropsWithChildren;

export const MotoScout24ThemeProvider: FC<MotoScout24ThemeProviderProps> = ({
  children,
}) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      {children}
    </ChakraProvider>
  );
};

export const MotoScout24Providers = MotoScout24ThemeProvider;

export default MotoScout24ThemeProvider;
