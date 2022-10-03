import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
} & Pick<ChakraButtonProps, 'isDisabled' | 'children'>;

export type MandatoryOnClick<AsProp = 'button'> = {
  as?: AsProp;
  type?: 'button';
  onClick: () => void;
} & SharedProps;

type OptionalOnClick<AsProp = 'button'> = {
  as?: AsProp;
  type?: 'submit';
  onClick: () => void;
} & SharedProps;

type ButtonType = 'button' | 'submit';

export type ButtonProps<T extends ButtonType> = T extends 'button'
  ? MandatoryOnClick
  : OptionalOnClick;

type LinkProps<AsProp = 'a'> = {
  as: AsProp;
  href: string;
  isExternal?: boolean;
  rel?: string;
} & SharedProps;

export type Props<AsProp = 'button' | 'a'> = AsProp extends 'a'
  ? LinkProps<AsProp>
  : ButtonProps<ButtonType>;

const isLink = (props: Props): props is LinkProps<'a'> => {
  return props.as === 'a';
};

const Button = ({
  variant = 'primary',
  size = 'lg',
  isDisabled = false,
  ...props
}: Props) => {
  if (isLink(props)) {
    return (
      <ChakraButton
        as={props.as}
        href={props.href}
        target={props.isExternal ? '_blank' : undefined}
        rel={props.rel || props.isExternal ? 'noopener noreferrer' : undefined}
        variant={variant}
        size={size}
      >
        {props.children}
      </ChakraButton>
    );
  }
  return (
    <ChakraButton
      isDisabled={isDisabled}
      variant={variant}
      size={size}
      {...props}
    >
      {props.children}
    </ChakraButton>
  );
};

export default Button;
