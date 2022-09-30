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

export type ButtonOnClickProps<AsProp = 'button'> =
  | (SharedProps & {
      as: AsProp;
    } & SubmitTypeProps)
  | (SharedProps & {
      as: AsProp;
    } & ButtonTypeProps)
  | (DefaultTypeProps & {
      as: AsProp;
    });

export type ButtonOnLinkProps<AsProp = 'a'> = SharedProps & {
  as: AsProp;
  url: string;
  isExternal?: boolean;
  rel?: string;
};

export type ButtonProps<AsProp = 'button' | 'a'> = AsProp extends 'a'
  ? ButtonOnLinkProps<AsProp>
  : ButtonOnClickProps<AsProp>;

const isLink = (props: ButtonProps): props is ButtonOnLinkProps<'a'> => { return props.as === "a" }

const Button = (props: ButtonProps) => {
  if (isLink(props)) {
    return (
      <ChakraButton
        as={props.as}
        href={props.url}
        target={props.isExternal ? '_blank' : undefined}
        rel={
          props.rel || props.isExternal ? 'noopener noreferrer' : undefined
        }
        variant={props.variant}
        size={props.size}
      >
        {props.children}
      </ChakraButton>
    );
  }

  return (
    <ChakraButton
      isDisabled={props.isDisabled}
      variant={props.variant}
      size={props.size}
    >
      {props.children}
    </ChakraButton>
  );
};

export default Button;
