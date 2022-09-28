import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type WithOnClick<T extends 'submit' | 'button'> = T extends 'submit'
  ? Pick<ChakraButtonProps, 'onClick'>
  : { onClick: Exclude<ChakraButtonProps['onClick'], undefined> };

type SharedProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  as?: 'button' | 'a';
  url?: string;
} & Pick<ChakraButtonProps, 'isDisabled' | 'children'>;

type ButtonTypeProps = SharedProps & {
  type?: 'button';
} & WithOnClick<'button'>;

type SubmitTypeProps = SharedProps & {
  type: 'submit';
} & WithOnClick<'submit'>;

type DefaultTypeProps = SharedProps & WithOnClick<'button'>;

export type ButtonProps = ButtonTypeProps | SubmitTypeProps | DefaultTypeProps;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  isDisabled = false,
  children,
  url,
  as,
  ...rest
}) => {
  return (
    <>
      {as === 'a' ? (
        <ChakraButton as="a" href={url} variant={variant} size={size}>
          {children}
        </ChakraButton>
      ) : (
        <ChakraButton
          isDisabled={isDisabled}
          variant={variant}
          size={size}
          {...rest}
        >
          {children}
        </ChakraButton>
      )}
    </>
  );
};

export default Button;
