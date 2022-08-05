import React, { FC } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

type MarginProps = 'm' | 'mt' | 'mb' | 'mr' | 'ml' | 'my' | 'mx';
type PaddingProps = 'p' | 'pt' | 'pb' | 'pr' | 'pl' | 'py' | 'px';

type Props = Pick<
  TextProps,
  | 'as'
  | 'children'
  | MarginProps
  | PaddingProps
  | 'color'
  | 'fontWeight'
  | 'lineHeight'
  | 'letterSpacing'
  | 'fontSize'
  | 'textStyle'
>;

const Text: FC<Props> = ({ children, ...chakraProps }) => (
  <ChakraText {...chakraProps}>{children}</ChakraText>
);

export default Text;
