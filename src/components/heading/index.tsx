import React, { FC } from 'react';
import { 
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps 
} from '@chakra-ui/react';

export type HeadingProps = Omit<ChakraHeadingProps, 'as' | 'asChild'>;

export const H1: FC<HeadingProps> = ({
  textStyle = 'heading1',
  children,
  ...rest
}) => (
  <ChakraHeading as="h1" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H2: FC<HeadingProps> = ({
  textStyle = 'heading2',
  children,
  ...rest
}) => (
  <ChakraHeading as="h2" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H3: FC<HeadingProps> = ({
  textStyle = 'heading3',
  children,
  ...rest
}) => (
  <ChakraHeading as="h3" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H4: FC<HeadingProps> = ({
  textStyle = 'heading4',
  children,
  ...rest
}) => (
  <ChakraHeading as="h4" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H5: FC<HeadingProps> = ({
  textStyle = 'heading5',
  children,
  ...rest
}) => (
  <ChakraHeading as="h5" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);

export const H6: FC<HeadingProps> = ({
  textStyle = 'heading6',
  children,
  ...rest
}) => (
  <ChakraHeading as="h6" textStyle={textStyle} {...rest}>
    {children}
  </ChakraHeading>
);
