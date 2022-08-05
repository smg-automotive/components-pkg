import React, { FC, MouseEvent, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  isDisabled?: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  type?: 'button' | 'submit';
}

const Button: FC<Props> = ({
  variant = 'primary',
  size = 'lg',
  isDisabled = false,
  type = 'button',
  onClick,
  children,
}) => (
  <ChakraButton
    onClick={onClick}
    isDisabled={isDisabled}
    variant={variant}
    size={size}
    type={type}
  >
    {children}
  </ChakraButton>
);

export default Button;
