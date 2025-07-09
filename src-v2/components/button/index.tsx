import React, { ElementType, forwardRef, ReactElement, ReactNode } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
type Never<Source> = { [P in keyof Source]?: never };

type LinkButton = {
  href?: string;
  isExternal?: boolean;
  rel?: string;
};

type IconButton = {
  ariaLabel: string;
  icon: ReactElement;
};

type ButtonSize = 'md' | 'lg';

type SharedProps = {
  as?: 'button';
  variant?: 'primary' | 'secondary' | 'success' | 'transparent';
  size?: ButtonSize
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick?: ChakraButtonProps['onClick'];
} & Omit<
  ChakraButtonProps,
  | 'backgroundColor'
  | 'background'
  | 'color'
  | 'textColor'
  | 'border'
  | 'textStyle'
> &
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
    onClick: Exclude<ChakraButtonProps['onClick'], undefined>;
  }
>;

export type ButtonProps = SubmitType | ButtonType;

type LinkProps = Overwrite<
  SharedProps,
  LinkButton & {
    as: ElementType;
    isDisabled?: false;
  }
>;

type IconProps = IconButton &
  Never<Pick<SharedProps, 'leftIcon' | 'rightIcon' | 'children'>>;
type IconButtonProps =
  | Overwrite<ButtonType, IconProps>
  | Overwrite<SubmitType, IconProps>
  | Overwrite<LinkProps, IconProps>;

export type Props = ButtonProps | IconButtonProps | LinkProps;

const Button = forwardRef<HTMLLinkElement | HTMLButtonElement, Props>(
  (props) => {
    const {
      variant = 'primary',
      size = 'lg',
      as = 'button',
      isExternal,
      ariaLabel,
      icon,
      ...rest
    } = props;

    return (
      <ChakraButton
        leftIcon={props.children ? props.leftIcon : icon}
        rightIcon={props.children ? props.rightIcon : undefined}
        as={as}
        aria-label={props.children ? undefined : ariaLabel}
        {...rest}
        {...(props.as === 'a'
          ? {
              target: isExternal ? '_blank' : undefined,
              rel:
                props.rel || (isExternal ? 'noopener noreferrer' : undefined),
            }
          : {})}
      >
        {props.children}
      </ChakraButton>
    );
  },
);
Button.displayName = 'Button';

export default Button;
