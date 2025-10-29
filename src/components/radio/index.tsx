import React, { ChangeEvent, forwardRef } from 'react';
import { Box, RadioGroup, useSlotRecipe } from '@chakra-ui/react';

export interface Props {
  name?: string;
  value: string;
  label?: string;
  size?: 'md' | 'base';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  variant?: 'fontRegular' | 'fontBold';
}

export const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      label,
      size = 'base',
      onChange,
      checked = false,
      invalid,
      disabled = false,
      variant = 'fontRegular',
      ...rest
    },
    ref,
  ) => {

  const recipe = useSlotRecipe({ key: 'radio' });

  const [recipeProps, restProps] = recipe.splitVariantProps({
    ...rest,
  });

  const styles = recipe(recipeProps);
  
    return (
      <RadioGroup.Root
        onValueChange={() => onChange}
        value={value}
        fontVariant={variant}
        name={name}
        css={styles.root}
        width="full"
        {...restProps}
      >
        <RadioGroup.Item
          value={value}
          disabled={disabled}
          invalid={invalid}
          css={styles.item}
        >
          <RadioGroup.ItemControl css={styles.control} />
          <RadioGroup.ItemHiddenInput ref={ref} checked={checked} />
          <RadioGroup.ItemIndicator css={styles.indicator} />
          <RadioGroup.ItemText css={styles.text}>{label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>
    );
  },
);
