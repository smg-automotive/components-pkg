'use client';

import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import autoScout24System from '@/src/themes/autoScout24';

export type AutoScout24ThemeProviderProps = PropsWithChildren;

export const AutoScout24ThemeProvider: FC<AutoScout24ThemeProviderProps> = ({
  children,
}) => {
  return <ChakraProvider value={autoScout24System}>{children}</ChakraProvider>;
};
