import React, { FC } from 'react';
import { Stack as ChakraStack, StackProps } from '@chakra-ui/react';

type Props = Pick<
  StackProps,
  | 'align'
  | 'children'
  | 'direction'
  | 'justify'
  | 'spacing'
  | 'wrap'
  | 'padding'
>;

const Stack: FC<Props> = ({ children, ...rest }) => (
  <ChakraStack {...rest}>{children}</ChakraStack>
);

export default Stack;
