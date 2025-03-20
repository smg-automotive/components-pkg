import React, { FC } from 'react';
import {
  Stack as ChakraStack,
  StackProps as ChakraStackProps,
} from '@chakra-ui/react';

export { StackSeparator } from '@chakra-ui/react';

export type StackProps = Pick<
  ChakraStackProps,
  | 'align'
  | 'children'
  | 'css'
  | 'direction'
  | 'justify'
  | 'gap'
  | 'wrap'
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'padding'
  | 'paddingX'
  | 'paddingY'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'separator'
  | 'alignItems'
  | 'width'
>;

export const Stack: FC<StackProps> = ({ children, ...rest }) => (
  <ChakraStack {...rest}>{children}</ChakraStack>
);
