import React, { FC } from 'react';
import { Spinner as ChakraSpinner, SpinnerProps as ChakraSpinnerProps } from '@chakra-ui/react';

export type SpinnerProps = ChakraSpinnerProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

export const Spinner: FC<SpinnerProps> = ({ size }) => <ChakraSpinner size={size} />