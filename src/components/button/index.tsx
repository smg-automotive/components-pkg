import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
} & Pick<ChakraButtonProps, 'isDisabled' | 'onClick' | 'children'>;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  isDisabled = false,
  onClick,
  children,
}) => (
  <ChakraButton
    onClick={onClick}
    isDisabled={isDisabled}
    variant={variant}
    size={size}
  >
    {children}
  </ChakraButton>
);

export default Button;
