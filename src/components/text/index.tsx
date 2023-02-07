import React, { FC } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

type Props = Pick<
  TextProps,
  | 'as'
  | 'children'
  | 'color'
  | 'textStyle'
  | 'textAlign'
  | 'isTruncated'
  | 'noOfLines'
>;

const Text: FC<Props> = ({ children, ...chakraProps }) => (
  <ChakraText {...chakraProps}>{children}</ChakraText>
);

export default Text;
