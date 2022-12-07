import React, { FC, ReactElement, ReactNode } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
type Never<Source> = { [P in keyof Source]?: never };

type LinkButton = {
  href: string;
  isExternal?: boolean;
  rel?: string;
};

type IconButton = {
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
  Never<LinkButton> &
  Never<IconButton>;

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

type IconProps = IconButton &
  Never<Pick<SharedProps, 'leftIcon' | 'rightIcon' | 'children'>>;
type IconButtonProps =
  | Overwrite<ButtonType, IconProps>
  | Overwrite<SubmitType, IconProps>
  | Overwrite<LinkProps, IconProps>;

export type Props = LinkProps | ButtonProps | IconButtonProps;

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
