import React, { FC } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

export const H1: FC<Omit<HeadingProps, 'as' | 'textStyle'>> = ({
  children,
  ...rest
}) => (
  <ChakraHeading as="h1" textStyle="heading1" {...rest}>
    {children}
  </ChakraHeading>
);

export const H2: FC<Omit<HeadingProps, 'as' | 'textStyle'>> = ({
  children,
  ...rest
}) => (
  <ChakraHeading as="h2" textStyle="heading2" {...rest}>
    {children}
  </ChakraHeading>
);

export const H3: FC<Omit<HeadingProps, 'as' | 'textStyle'>> = ({
  children,
  ...rest
}) => (
  <ChakraHeading as="h3" textStyle="heading3" {...rest}>
    {children}
  </ChakraHeading>
);

export const H4: FC<Omit<HeadingProps, 'as' | 'textStyle'>> = ({
  children,
  ...rest
}) => (
  <ChakraHeading as="h4" textStyle="heading4" {...rest}>
    {children}
  </ChakraHeading>
);

export const H5: FC<Omit<HeadingProps, 'as' | 'textStyle'>> = ({
  children,
  ...rest
}) => (
  <ChakraHeading as="h5" textStyle="heading5" {...rest}>
    {children}
  </ChakraHeading>
);

export const H6: FC<Omit<HeadingProps, 'as' | 'textStyle'>> = ({
  children,
  ...rest
}) => (
  <ChakraHeading as="h6" textStyle="heading6" {...rest}>
    {children}
  </ChakraHeading>
);
