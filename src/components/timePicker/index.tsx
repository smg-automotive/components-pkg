import React, { forwardRef } from 'react';
import {
  Field,
  Input,
  InputProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { inputSlotRecipe } from 'src/themes/shared/slotRecipes/input';

type InputVariantProps = RecipeVariantProps<typeof inputSlotRecipe>;

export type TimePickerProps = Pick<
  InputProps,
  'onFocus' | 'onBlur' | 'onChange'
> &
  InputVariantProps & {
    value?: string;
    invalid?: boolean;
  };

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (props, ref) => {
    const recipe = useSlotRecipe({ key: 'input' });
    const [recipeProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    return (
      <Field.Root invalid={props.invalid}>
        <Input
          {...props}
          css={{
            ...styles.field,
            display: 'block',
            textAlign: 'start',
          }}
          type="time"
          ref={ref}
        />
      </Field.Root>
    );
  },
);
TimePicker.displayName = 'TimePicker';
