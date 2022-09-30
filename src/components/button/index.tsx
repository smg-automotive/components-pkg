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
  | (SubmitTypeProps & {
      as: AsProp;
    })
  | (ButtonTypeProps & {
      as: AsProp;
    })
  | (DefaultTypeProps & {
      as: AsProp;
    });

type ButtonLinkProps<AsProp = 'a'> = SharedProps & {
  as: AsProp;
  url: string;
  isExternal?: boolean;
  rel?: string;
};

export type ButtonProps<AsProp = 'button' | 'a'> = AsProp extends 'a'
  ? ButtonLinkProps<AsProp>
  : ButtonOnClickProps<AsProp>;

const isLink = (props: ButtonProps): props is ButtonLinkProps<'a'> => {
  return props.as === 'a';
};

const Button = ({
  variant = 'primary',
  size = 'lg',
  isDisabled = false,
  ...props
}: ButtonProps) => {
  if (isLink(props)) {
    return (
      <ChakraButton
        as={props.as}
        href={props.url}
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
