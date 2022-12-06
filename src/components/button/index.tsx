import React, { FC, ReactElement, ReactNode } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
type ToNever<Source> = { [P in keyof Source]?: never };

type LinkButton = {
  href: string;
  isExternal?: boolean;
  rel?: string;
};

type IconOnlyButton = {
  ariaLabel: string;
  icon: ReactElement;
};

type SharedProps = {
  as?: 'button';
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick?: () => void;
} & Pick<ChakraButtonProps, 'width' | 'isDisabled'> &
  ToNever<LinkButton> &
  ToNever<IconOnlyButton>;

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
  LinkButton & {
    as: 'a';
    isDisabled?: false;
  }
>;

type IconProps = Overwrite<
  LinkProps | ButtonProps,
  IconOnlyButton &
    ToNever<Pick<SharedProps, 'leftIcon' | 'rightIcon' | 'children'>>
>;

export type Props = LinkProps | ButtonProps | IconProps;

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
