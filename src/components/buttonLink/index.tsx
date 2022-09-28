import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  url: string;
  isExternal?: boolean;
  rel?: string;
} & Pick<ChakraButtonProps, 'children'>;

export type ButtonProps = SharedProps;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  url,
  isExternal,
  rel,
  children,
}) => (
  <ChakraButton
    as="a"
    href={url}
    variant={variant}
    size={size}
    target={isExternal ? '_blank' : undefined}
    rel={rel || isExternal ? 'noopener noreferrer' : undefined}
  >
    {children}
  </ChakraButton>
);

export default Button;
