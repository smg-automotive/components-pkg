import React, { forwardRef } from 'react';
import { Field, Input, InputProps, useSlotRecipe } from '@chakra-ui/react';

export interface DatePickerProps
  extends Pick<InputProps, 'onFocus' | 'onBlur' | 'onChange'> {
  size?: 'md' | 'lg';
  min?: Date;
  value?: string;
  invalid?: boolean;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ min, ...props }, ref) => {
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
          type="date"
          min={min ? min.toISOString().split('T')[0] : undefined}
          ref={ref}
        />
      </Field.Root>
    );
  },
);
DatePicker.displayName = 'DatePicker';
