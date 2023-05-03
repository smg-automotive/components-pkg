import React, { FC } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

const Text: FC<TextProps> = ({ children, ...chakraProps }) => (
  <ChakraText {...chakraProps}>{children}</ChakraText>
);

export default Text;
