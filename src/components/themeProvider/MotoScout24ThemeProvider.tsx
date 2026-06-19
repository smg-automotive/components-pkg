'use client';

import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import motoScout24System from '@/src/themes/motoScout24';

export type MotoScout24ThemeProviderProps = PropsWithChildren;

export const MotoScout24ThemeProvider: FC<MotoScout24ThemeProviderProps> = ({
  children,
}) => {
  return <ChakraProvider value={motoScout24System}>{children}</ChakraProvider>;
};
