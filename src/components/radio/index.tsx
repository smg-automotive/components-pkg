'use client';

import React, { ChangeEvent, forwardRef } from 'react';
import { RadioGroup, useSlotRecipe } from '@chakra-ui/react';

export interface Props {
  value: string;
  label?: string;
  name?: string;
  size?: 'base' | 'md';
  variant?: 'fontRegular' | 'fontBold';
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const recipe = useSlotRecipe({ key: 'radio' as const });

  const [recipeProps, restProps] = recipe.splitVariantProps(props);

  const styles = recipe(recipeProps);

  const {
    value,
    label = 'Radio',
    name,
    checked = false,
    disabled = false,
    invalid = false,
    onChange,
    ...rootDomProps
  } = restProps;

  const isChecked = !!checked;

  return (
    <RadioGroup.Root
      name={name}
      value={isChecked ? value : undefined}
      onValueChange={() => {
        if (!onChange) return;
        const target = {
          value,
          checked: !isChecked,
          name,
        } as unknown as EventTarget & HTMLInputElement;
        onChange({ target } as ChangeEvent<HTMLInputElement>);
      }}
      css={styles.root}
      {...rootDomProps}
    >
      <RadioGroup.Item
        value={value}
        disabled={disabled}
        invalid={invalid}
        css={styles.item}
      >
        <RadioGroup.ItemControl css={styles.control}>
          <RadioGroup.ItemIndicator css={styles.indicator} />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText css={styles.label}>{label}</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput ref={ref} checked={isChecked} />
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
});
