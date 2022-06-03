import React, { FC, MouseEvent, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface Props {
  variant?: 'primary';
  size?: 'small' | 'regular' | 'large';
  isDisabled?: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

const Button: FC<Props> = ({
  variant = 'primary',
  size = 'regular',
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
