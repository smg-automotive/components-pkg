'use client';

import React, { ElementType, forwardRef, ReactElement, ReactNode } from 'react';
import {
  Button as ChakraButton,
  RecipeVariantProps,
  useBreakpointValue,
  useRecipe,
} from '@chakra-ui/react';

import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

import { buttonRecipe } from 'src/themes/shared/recipes/button';
import { breakpoints } from 'src/themes';

type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
type Never<Source> = { [P in keyof Source]?: never };

type BreakpointKeys = keyof typeof breakpoints;

// TODO document why we need to do this
//Let's make it more flexible by allowing generic responsive sizes
type ResponsiveButtonProps<T> = Partial<Record<BreakpointKeys, T>>;

const getBreakpointValues = <S,>(
  size: S | ResponsiveButtonProps<S> | undefined,
) => {
  // move this to utility
  // Normalize size prop for useBreakpointValue
  let responsiveSize: Partial<Record<BreakpointKeys, S>> | undefined;
  if (typeof size === 'string') {
    // If size is a string, apply it to all breakpoints
    responsiveSize = Object.keys(breakpoints).reduce(
      (acc, key) => {
        acc[key as BreakpointKeys] = size as S;
        return acc;
      },
      {} as Partial<Record<BreakpointKeys, S>>,
    );
  } else if (size && typeof size === 'object') {
    responsiveSize = size as Partial<Record<BreakpointKeys, S>>;
  }

  return responsiveSize;
};

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
  variant?: RecipeVariantProps<typeof buttonRecipe>['variant'];
  size?: ButtonSize | ResponsiveButtonProps<ButtonSize>;
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick?: ChakraButtonProps['onClick'];
  isDisabled?: boolean;
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

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const recipe = useRecipe({ recipe: buttonRecipe });
  const sizeVariant = useBreakpointValue(getBreakpointValues(props.size) || {});
  const { size, ...withoutSizeProps } = props;
  const [recipeProps, restProps] = recipe.splitVariantProps({
    ...withoutSizeProps,
    size: sizeVariant,
  });
  const styles = recipe(recipeProps);

  const { as = 'button', isDisabled, ...rest } = restProps;

  // handle https://chakra-ui.com/docs/components/button#as-link

  // hanlde https://chakra-ui.com/docs/components/button#disabled-link
  return (
    <ChakraButton
      ref={ref}
      css={styles}
      as={as}
      disabled={isDisabled}
      aria-label={props.children ? undefined : props.ariaLabel}
      {...rest}
      {...(props.as === 'a'
        ? {
            target: props.isExternal ? '_blank' : undefined,
            rel:
              props.rel ||
              (props.isExternal ? 'noopener noreferrer' : undefined),
          }
        : {})}
    >
      {props.children ? props.leftIcon : props.icon}
      {props.children}
      {props.children ? props.rightIcon : undefined}
    </ChakraButton>
  );
});

Button.displayName = 'Button';

export default Button;
