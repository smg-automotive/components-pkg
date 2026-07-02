'use client';

import React, { ElementType, forwardRef, ReactElement, ReactNode } from 'react';
import {
  Button as ChakraButton,
  RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';

import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

import { buttonRecipe } from '@/src/themes/shared/recipes/button';

type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
type Never<Source> = { [P in keyof Source]?: never };

type LinkButton = {
  href?: string;
  isExternal?: boolean;
  prefetch?: boolean;
  rel?: string;
  replace?: boolean;
};

type IconButton = {
  ariaLabel: string;
  icon: ReactElement;
};

export type ButtonSharedProps = RecipeVariantProps<typeof buttonRecipe> & {
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
  ButtonSharedProps,
  {
    type: 'submit';
  }
>;

type ButtonType = Overwrite<
  ButtonSharedProps,
  {
    type?: 'button';
    onClick: Exclude<ChakraButtonProps['onClick'], undefined>;
  }
>;

export type BaseButtonProps = SubmitType | ButtonType;

type LinkProps = Overwrite<
  ButtonSharedProps,
  LinkButton & {
    as: ElementType;
    disabled?: false;
  }
>;

type IconProps = IconButton &
  Never<Pick<ButtonSharedProps, 'leftIcon' | 'rightIcon' | 'children'>>;
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

    const {
      as = 'button',
      disabled,
      href,
      isExternal,
      onClick,
      prefetch,
      rel,
      replace,
      ...rest
    } = restProps;

    const asLinkProps = {
      href,
      target: isExternal ? '_blank' : undefined,
      rel: rel || (isExternal ? 'noopener noreferrer' : undefined),
      ...(disabled ? { 'aria-disabled': true } : {}),
    };

    const handleClick: ChakraButtonProps['onClick'] = (e) => {
      if (href && disabled) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    const content = (
      <>
        {props.leftIcon ? props.leftIcon : props.icon}
        {props.children}
        {props.rightIcon ? props.rightIcon : undefined}
      </>
    );

    const isComponentAs = Boolean(as) && typeof as !== 'string';

    if (isComponentAs) {
      const AsComp = as as React.ElementType;

      return (
        <ChakraButton
          ref={ref}
          css={styles}
          asChild
          disabled={disabled}
          aria-label={props.children ? undefined : props.ariaLabel}
          {...rest}
        >
          <AsComp
            {...asLinkProps}
            prefetch={prefetch}
            replace={replace}
            onClick={handleClick}
          >
            {content}
          </AsComp>
        </ChakraButton>
      );
    }

    return (
      <ChakraButton
        ref={ref}
        css={styles}
        as={as}
        disabled={disabled}
        aria-label={props.children ? undefined : props.ariaLabel}
        {...rest}
        {...(as === 'a' ? asLinkProps : {})}
        onClick={handleClick}
      >
        {content}
      </ChakraButton>
    );
  },
);
