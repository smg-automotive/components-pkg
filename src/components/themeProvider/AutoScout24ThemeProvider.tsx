import React, { type FC, type PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/src/themes/autoscout24';

export type AutoScout24ThemeProviderProps = PropsWithChildren;

export const AutoScout24ThemeProvider: FC<AutoScout24ThemeProviderProps> = ({
  children,
}) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      {children}
    </ChakraProvider>
  );
};

export default AutoScout24ThemeProvider;
