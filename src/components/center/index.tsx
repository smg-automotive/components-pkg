import React, { FC } from 'react';
import {
  Center as ChakraCenter,
  CenterProps as ChakraCenterProps,
} from '@chakra-ui/react';

export type CenterProps = Pick<ChakraCenterProps, 'children' | 'padding'>;

export const Center: FC<CenterProps> = ({ children, padding }) => (
  <ChakraCenter padding={padding}>{children}</ChakraCenter>
);