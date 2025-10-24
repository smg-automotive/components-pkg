import React from 'react';
import { NumberInput, useSlotRecipe } from '@chakra-ui/react';

type Size = 'lg' | undefined;
type Variant = 'outline' | 'inputLeft' | 'inputRight' | undefined;

type RecipeProps = {
  size?: Size;
  variant?: Variant;
};

const toStr = (v: number | string | undefined) => {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? String(v) : v;
};

type RootBaseProps = React.ComponentProps<typeof NumberInput.Root>;
type RootProps = Omit<RootBaseProps, 'defaultValue' | 'value'> & {
  defaultValue?: number | string;
  value?: number | string;
};

export const NumberInputRoot = React.forwardRef<
  HTMLDivElement,
  RootProps & RecipeProps
>((props, ref) => {
  const { size, variant, defaultValue, value, ...rest } = props;

  const recipe = useSlotRecipe({ key: 'numberInput' });
  const styles = recipe({ size, variant });

  return (
    <NumberInput.Root
      ref={ref}
      css={styles.root}
      defaultValue={toStr(defaultValue)}
      value={toStr(value)}
      {...rest}
    />
  );
});
NumberInputRoot.displayName = 'NumberInputRoot';

export const NumberInputInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof NumberInput.Input> & RecipeProps
>((props, ref) => {
  const { size, variant, ...rest } = props;
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const styles = recipe({ size, variant });
  return <NumberInput.Input ref={ref} css={styles.input} {...rest} />;
});
NumberInputInput.displayName = 'NumberInputInput';

export const NumberInputControl = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof NumberInput.Control> & RecipeProps
>((props, ref) => {
  const { size, variant, ...rest } = props;
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const styles = recipe({ size, variant });
  return <NumberInput.Control ref={ref} css={styles.control} {...rest} />;
});
NumberInputControl.displayName = 'NumberInputControl';

export const NumberInputInc = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof NumberInput.IncrementTrigger> & RecipeProps
>((props, ref) => {
  const { size, variant, ...rest } = props;
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const styles = recipe({ size, variant });
  return (
    <NumberInput.IncrementTrigger
      ref={ref}
      css={styles.incrementTrigger}
      {...rest}
    />
  );
});
NumberInputInc.displayName = 'NumberInputInc';

export const NumberInputDec = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof NumberInput.DecrementTrigger> & RecipeProps
>((props, ref) => {
  const { size, variant, ...rest } = props;
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const styles = recipe({ size, variant });
  return (
    <NumberInput.DecrementTrigger
      ref={ref}
      css={styles.decrementTrigger}
      {...rest}
    />
  );
});
NumberInputDec.displayName = 'NumberInputDec';
