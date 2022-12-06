import React, { FC, ReactElement, ReactNode } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;

type SharedProps = {
  as?: 'button';
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick?: () => void;
  href?: never;
  isExternal?: never;
  rel?: never;
  icon?: never;
  ariaLabel?: never;
} & Pick<ChakraButtonProps, 'width' | 'isDisabled'>;

type WithIcon = {
  ariaLabel: string;
  icon: ReactElement;
  leftIcon?: never;
  rightIcon?: never;
  children?: never;
};

type SubmitType = Overwrite<
  SharedProps,
  {
    type: 'submit';
  }
>;

type ButtonType = Overwrite<
  SharedProps,
  {
    type?: 'button';
    onClick: () => void;
  }
>;

export type ButtonProps = SubmitType | ButtonType;

type LinkProps = Overwrite<
  SharedProps,
  {
    as: 'a';
    href: string;
    isExternal?: boolean;
    rel?: string;
    isDisabled?: false;
  }
>;

export type Props =
  | (LinkProps | ButtonProps)
  | Overwrite<LinkProps | ButtonProps, WithIcon>;

const Button: FC<Props> = (props) => {
  const {
    variant = 'primary',
    size = 'lg',
    isDisabled = false,
    as = 'button',
    isExternal,
    ...rest
  } = props;

  return (
    <ChakraButton
      leftIcon={props.children ? props.leftIcon : props.icon}
      rightIcon={props.children ? props.rightIcon : undefined}
      iconSpacing={props.children ? 'xs' : 0}
      as={as}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      aria-label={props.children ? undefined : props.ariaLabel}
      {...rest}
      {...(props.as === 'a'
        ? {
            target: isExternal ? '_blank' : undefined,
            rel: props.rel || (isExternal ? 'noopener noreferrer' : undefined),
          }
        : {})}
    >
      {props.children}
    </ChakraButton>
  );
};

export default Button;
