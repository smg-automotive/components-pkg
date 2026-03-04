'use client';

import React, { ChangeEvent, forwardRef } from 'react';
import {
  RadioGroup,
  RecipeVariantProps,
  Stack,
  useSlotRecipe,
} from '@chakra-ui/react';

import { radioRecipe } from 'src/themes/shared/slotRecipes/radio';

export type RadioItemProps = {
  value: string;
  label?: string;
  invalid?: boolean;
  disabled?: boolean;
};

export type RadioProps = RecipeVariantProps<typeof radioRecipe> & {
  value?: string;
  items: RadioItemProps[];
  orientation?: 'horizontal' | 'vertical';
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const recipe = useSlotRecipe({ key: 'radio' });

  const [recipeProps, restProps] = recipe.splitVariantProps(props);

  const styles = recipe(recipeProps);

  const {
    value,
    name,
    onChange,
    items,
    orientation = 'horizontal',
    ...rootDomProps
  } = restProps;

  return (
    <RadioGroup.Root
      name={name}
      value={value}
      onValueChange={(details) => {
        if (!onChange) return;
        const target = {
          value: details.value,
          name,
          checked: details.value === value,
        } as unknown as EventTarget & HTMLInputElement;
        onChange({ target } as ChangeEvent<HTMLInputElement>);
      }}
      css={styles.root}
      {...rootDomProps}
    >
      <Stack
        direction={orientation === 'horizontal' ? 'row' : 'column'}
        gap="2xl"
      >
        {items.map((item) => (
          <RadioGroup.Item
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            invalid={item.invalid}
            css={styles.item}
          >
            <RadioGroup.ItemControl css={styles.control}>
              <RadioGroup.ItemIndicator css={styles.indicator} />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText css={styles.label}>
              {item.label}
            </RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput ref={ref} />
          </RadioGroup.Item>
        ))}
      </Stack>
    </RadioGroup.Root>
  );
});
