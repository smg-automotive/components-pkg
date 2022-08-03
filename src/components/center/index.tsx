import React, { FC, PropsWithChildren } from 'react';
import { Center as ChakraCenter } from '@chakra-ui/react';

const Center: FC<PropsWithChildren> = ({ children }) => (
  <ChakraCenter>{children}</ChakraCenter>
);

export default Center;
export { PropsWithChildren as CenterProps };
