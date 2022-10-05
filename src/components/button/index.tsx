import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
} & Pick<ChakraButtonProps, 'children'>;

type MandatoryOnClick = {
  as?: 'button';
  type: 'submit';
  onClick?: () => void;
  href?: never;
  isExternal?: never;
  rel?: never;
} & SharedProps &
  Pick<ChakraButtonProps, 'isDisabled'>;

type OptionalOnClick = {
  as?: 'button';
  type?: 'button';
  onClick?: () => void;
  href?: never;
  isExternal?: never;
  rel?: never;
} & SharedProps &
  Pick<ChakraButtonProps, 'isDisabled'>;

export type ButtonProps = MandatoryOnClick | OptionalOnClick;

type LinkProps = {
  as: 'a';
  href: string;
  isExternal?: boolean;
  rel?: string;
  isDisabled?: false;
} & SharedProps;

export type Props = LinkProps | ButtonProps;

const Button: FC<Props> = ({ children, ...props }) => {
  const {
    variant = 'primary',
    size = 'lg',
    isDisabled = false,
    as = 'button',
    ...rest
  } = props;

  return (
    <ChakraButton
      as={as}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      {...rest}
      {...(props.as === 'a'
        ? {
            target: props.isExternal ? '_blank' : undefined,
            rel:
              props.rel ||
              (props.isExternal ? 'noopener noreferrer' : undefined),
          }
        : {})}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
