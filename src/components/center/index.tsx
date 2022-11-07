import React, { FC } from 'react';
import {
  Center as ChakraCenter,
  CenterProps as ChakraCenterProps,
} from '@chakra-ui/react';

type CenterProps = Pick<ChakraCenterProps, 'children' | 'padding'>;

const Center: FC<CenterProps> = ({ children }) => (
  <ChakraCenter>{children}</ChakraCenter>
);

export default Center;
export { CenterProps };
