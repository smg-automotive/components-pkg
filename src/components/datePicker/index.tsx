import React, { forwardRef } from 'react';
import {
  Input,
  InputProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { inputSlotRecipe } from '@/src/themes/shared/slotRecipes/input';

type InputVariantProps = RecipeVariantProps<typeof inputSlotRecipe>;

export type DatePickerProps = Pick<
  InputProps,
  'onFocus' | 'onBlur' | 'onChange'
> &
  InputVariantProps & {
    min?: Date;
    value?: string;
    invalid?: boolean;
  };

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ min, ...props }, ref) => {
    const recipe = useSlotRecipe({ key: 'input' });
    const [recipeProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    return (
      <Input
        {...props}
        css={{
          ...styles.field,
          display: 'block',
          textAlign: 'start',
        }}
        type="date"
        min={min ? min.toISOString().split('T')[0] : undefined}
        ref={ref}
      />
    );
  },
);
DatePicker.displayName = 'DatePicker';
