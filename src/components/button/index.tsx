import React, { FC, MouseEvent, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  isDisabled?: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

const Button: FC<Props> = ({
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
