import React, { FC } from 'react';
import { Spinner as ChakraSpinner } from '@chakra-ui/react';

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

const Spinner: FC<Props> = ({ size }) => (
  <ChakraSpinner size={size} color="gray.900" speed="0.8s" />
);

export default Spinner;
