import React, { FC, MouseEvent, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  isDisabled?: boolean;
  children: ReactNode;
};

type ButtonProps = SharedProps & {
  type?: 'button';
  onClick: (event: MouseEvent<HTMLElement>) => void;
};

type SubmitProps = SharedProps & {
  type?: 'submit';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

type Props = ButtonProps | SubmitProps;

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
