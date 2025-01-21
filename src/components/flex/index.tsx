import React, { FC } from 'react';

import {
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps,
} from '@chakra-ui/react';

export type FlexProps = Omit<ChakraFlexProps, 'gap' | 'columnGap' | 'rowGap'>;

export const Flex: FC<FlexProps> = ({ children, ...rest}) => (
  <ChakraFlex {...rest}>{children}</ChakraFlex>
)