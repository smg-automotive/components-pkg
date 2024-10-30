import React, { FC } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

export const H1: FC<Omit<HeadingProps, 'as'>> = ({
  textStyle = 'heading1',
  children,
  ...rest
}) => (
  <ChakraHeading as="h1" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H2: FC<Omit<HeadingProps, 'as'>> = ({
  textStyle = 'heading2',
  children,
  ...rest
}) => (
  <ChakraHeading as="h2" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H3: FC<Omit<HeadingProps, 'as'>> = ({
  textStyle = 'heading3',
  children,
  ...rest
}) => (
  <ChakraHeading as="h3" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H4: FC<Omit<HeadingProps, 'as'>> = ({
  textStyle = 'heading4',
  children,
  ...rest
}) => (
  <ChakraHeading as="h4" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H5: FC<Omit<HeadingProps, 'as'>> = ({
  textStyle = 'heading5',
  children,
  ...rest
}) => (
  <ChakraHeading as="h5" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H6: FC<Omit<HeadingProps, 'as'>> = ({
  textStyle = 'heading6',
  children,
  ...rest
}) => (
  <ChakraHeading as="h6" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);
