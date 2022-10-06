import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
} & Pick<ChakraButtonProps, 'children'>;

type SubmitType = {
  as?: 'button';
  type: 'submit';
  onClick?: () => void;
  href?: never;
  isExternal?: never;
  rel?: never;
} & SharedProps &
  Pick<ChakraButtonProps, 'isDisabled'>;

type ButtonType = {
  as?: 'button';
  type?: 'button';
  onClick?: () => void;
  href?: never;
  isExternal?: never;
  rel?: never;
} & SharedProps &
  Pick<ChakraButtonProps, 'isDisabled'>;

export type ButtonProps = SubmitType | ButtonType;

type LinkProps = {
  as: 'a';
  href: string;
  isExternal?: boolean;
  rel?: string;
  isDisabled?: false;
  onClick?: () => void;
} & SharedProps;

export type Props = LinkProps | ButtonProps;

const Button: FC<Props> = ({
  as = 'button',
  variant = 'primary',
  size = 'lg',
  isDisabled = false,
  rel,
  children,
  isExternal,
  ...props
}) => {
  return (
    <ChakraButton
      as={as}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      {...props}
      {...(as === 'a'
        ? {
            target: isExternal ? '_blank' : undefined,
            rel: rel || (isExternal ? 'noopener noreferrer' : undefined),
          }
        : {})}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
