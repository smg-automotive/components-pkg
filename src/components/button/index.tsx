import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

import { WithRequiredProperty } from '../../lib';

type OnClick = Pick<ChakraButtonProps, 'onClick'>;

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
} & Pick<ChakraButtonProps, 'isDisabled' | 'children'>;

type ButtonProps = SharedProps &
  WithRequiredProperty<OnClick, 'onClick'> & {
    type?: 'button';
  };

type SubmitProps = SharedProps &
  OnClick & {
    type?: 'submit';
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
