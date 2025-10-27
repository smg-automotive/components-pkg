'use client';

import React from 'react';
import {
  NumberInput,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { numberInputRecipe } from 'src/themes/shared/slotRecipes/numberInput';

type NumberInputVariants = RecipeVariantProps<typeof numberInputRecipe>;

type WithRecipe = { recipe?: unknown };

const toStr = (v: number | string | undefined) => {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? String(v) : v;
};

type RootBase = React.ComponentProps<typeof NumberInput.Root>;
type RootProps = Omit<RootBase, 'value' | 'defaultValue'> & {
  value?: number | string;
  defaultValue?: number | string;
};

export const NumberInputRoot = React.forwardRef<
  HTMLDivElement,
  RootProps & NumberInputVariants & WithRecipe
>((props, ref) => {
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  const { value, defaultValue, ...rest } = restProps;

  return (
    <NumberInput.Root
      ref={ref}
      css={styles.root}
      value={toStr(value)}
      defaultValue={toStr(defaultValue)}
      {...rest}
    />
  );
});
NumberInputRoot.displayName = 'NumberInputRoot';

export const NumberInputInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof NumberInput.Input> &
    NumberInputVariants &
    WithRecipe
>((props, ref) => {
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return <NumberInput.Input ref={ref} css={styles.input} {...restProps} />;
});
NumberInputInput.displayName = 'NumberInputInput';

export const NumberInputControl = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof NumberInput.Control> &
    NumberInputVariants &
    WithRecipe
>((props, ref) => {
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return <NumberInput.Control ref={ref} css={styles.control} {...restProps} />;
});
NumberInputControl.displayName = 'NumberInputControl';

export const NumberInputInc = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof NumberInput.IncrementTrigger> &
    NumberInputVariants &
    WithRecipe
>((props, ref) => {
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <NumberInput.IncrementTrigger
      ref={ref}
      css={styles.incrementTrigger}
      {...restProps}
    />
  );
});
NumberInputInc.displayName = 'NumberInputInc';

export const NumberInputDec = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof NumberInput.DecrementTrigger> &
    NumberInputVariants &
    WithRecipe
>((props, ref) => {
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <NumberInput.DecrementTrigger
      ref={ref}
      css={styles.decrementTrigger}
      {...restProps}
    />
  );
});
NumberInputDec.displayName = 'NumberInputDec';
