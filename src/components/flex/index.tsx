import React, { FC } from 'react';

import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/react';

const Flex: FC<Omit<FlexProps, 'gap' | 'columnGap' | 'rowGap'>> = ({
  children,
  ...rest
}) => <ChakraFlex {...rest}>{children}</ChakraFlex>;

export default Flex;
export type { FlexProps };
