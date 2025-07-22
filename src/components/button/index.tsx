'use client';

import React, { ElementType, forwardRef, ReactElement, ReactNode } from 'react';
import {
  Button as ChakraButton,
  RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';

import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

import { buttonRecipe } from 'src/themes/shared/recipes/button';

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

type SharedProps = RecipeVariantProps<typeof buttonRecipe> & {
  as?: 'button';
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick?: ChakraButtonProps['onClick'];
  disabled?: boolean;
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

export type BaseButtonProps = SubmitType | ButtonType;

type LinkProps = Overwrite<
  SharedProps,
  LinkButton & {
    as: ElementType;
    disabled?: false;
  }
>;

type IconProps = IconButton &
  Never<Pick<SharedProps, 'leftIcon' | 'rightIcon' | 'children'>>;
type IconButtonProps =
  | Overwrite<ButtonType, IconProps>
  | Overwrite<SubmitType, IconProps>
  | Overwrite<LinkProps, IconProps>;

export type UnifiedButtonProps = BaseButtonProps | IconButtonProps | LinkProps;

export const Button = forwardRef<HTMLButtonElement, UnifiedButtonProps>(
  (props, ref) => {
    const recipe = useRecipe({ recipe: buttonRecipe });
    const [recipeProps, restProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    const { as = 'button', disabled, ...rest } = restProps;

    const asLinkProps = {
      target: props.isExternal ? '_blank' : undefined,
      rel: props.rel || (props.isExternal ? 'noopener noreferrer' : undefined),
      ...(props.disabled ? { 'aria-disabled': true } : {}),
    };

    return (
      <ChakraButton
        ref={ref}
        css={styles}
        as={as}
        disabled={disabled}
        aria-label={props.children ? undefined : props.ariaLabel}
        {...rest}
        {...(props.as === 'a' ? asLinkProps : {})}
        onClick={(e) => {
          if (props.as === 'a' && props.href && disabled) {
            e.preventDefault();
          } else {
            props.onClick?.(e);
          }
        }}
      >
        {props.children ? props.leftIcon : props.icon}
        {props.children}
        {props.children ? props.rightIcon : undefined}
      </ChakraButton>
    );
  },
);
