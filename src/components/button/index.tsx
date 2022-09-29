import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
} & Pick<ChakraButtonProps, 'isDisabled' | 'children'>;

type WithOnClick<T extends 'submit' | 'button'> = T extends 'submit'
  ? Pick<ChakraButtonProps, 'onClick'>
  : { onClick: Exclude<ChakraButtonProps['onClick'], undefined> };

type ButtonTypeProps = SharedProps & {
  type?: 'button';
} & WithOnClick<'button'>;

type SubmitTypeProps = SharedProps & {
  type: 'submit';
} & WithOnClick<'submit'>;

type DefaultTypeProps = SharedProps & WithOnClick<'button'>;

export type ButtonOnClickProps =
  | (SharedProps & {
      as?: 'button';
    } & SubmitTypeProps)
  | (SharedProps & {
      as?: 'button';
    } & ButtonTypeProps)
  | (DefaultTypeProps & {
      as?: 'button';
    });

export type ButtonOnLinkProps = SharedProps & {
  as?: 'a';
  url: string;
  isExternal?: boolean;
  rel?: string;
};

export type ButtonProps = ButtonOnClickProps | ButtonOnLinkProps;

const Button = (props: ButtonProps) => {
  return props.as === 'a' ? (
    <ChakraButton
      as="a"
      href={props.url}
      target={props.isExternal ? '_blank' : undefined}
      rel={props.rel || props.isExternal ? 'noopener noreferrer' : undefined}
      variant={props.variant}
      size={props.size}
    >
      {props.children}
    </ChakraButton>
  ) : props.as === 'button' ? (
    <ChakraButton
      isDisabled={props.isDisabled}
      variant={props.variant}
      size={props.size}
    >
      {props.children}
    </ChakraButton>
  ) : null;
};

export default Button;
