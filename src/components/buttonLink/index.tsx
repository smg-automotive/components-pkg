import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  url: string;
} & Pick<ChakraButtonProps, 'children'>;

export type ButtonProps = SharedProps;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  children,
  url,
}) => {
  return (
    <ChakraButton as="a" href={url} variant={variant} size={size}>
      {children}
    </ChakraButton>
  );
};

export default Button;
