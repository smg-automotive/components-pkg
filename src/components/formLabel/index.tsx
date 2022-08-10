import React, { FC, PropsWithChildren } from 'react';
import { FormLabel as ChakraFormLabel } from '@chakra-ui/react';

const FormLabel: FC<PropsWithChildren> = ({ children }) => (
  <ChakraFormLabel>{children}</ChakraFormLabel>
);

export default FormLabel;
