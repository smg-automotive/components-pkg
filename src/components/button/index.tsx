import React, { FC, ReactElement } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
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

const Button: FC<Props> = ({ children, ...props }) => {
  const {
    variant = 'primary',
    size = 'lg',
    isDisabled = false,
    as = 'button',
    isExternal,
    leftIcon,
    rightIcon,
    ...rest
  } = props;

  return (
    <ChakraButton
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconSpacing="xs"
      as={as}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      {...rest}
      {...(props.as === 'a'
        ? {
            target: isExternal ? '_blank' : undefined,
            rel: props.rel || (isExternal ? 'noopener noreferrer' : undefined),
          }
        : {})}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
