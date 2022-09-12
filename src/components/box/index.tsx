import React, { FC } from 'react';
import { Box as ChakraBox, BoxProps as ChakraBoxProps } from '@chakra-ui/react';

const Box: FC<ChakraBoxProps> = ({
  children,
  background,
  borderRadius,
  color,
  padding,
  ...rest
}) => {
  return (
    <ChakraBox
      bg={background}
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      {...rest}
    >
      {children}
    </ChakraBox>
  );
};

export default Box;
