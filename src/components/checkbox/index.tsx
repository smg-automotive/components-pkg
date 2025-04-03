import React, { forwardRef, ReactNode } from 'react';
import {
  BoxProps,
  Checkbox as ChakraCheckbox,
  RecipeVariantProps,
  SwitchCheckedChangeDetails,
  useSlotRecipe,
} from '@chakra-ui/react';

import { checkboxRecipe } from 'src/themes/shared/slotRecipes/checkbox';

type CheckboxVariantProps = RecipeVariantProps<typeof checkboxRecipe>;

type CheckboxVariant = keyof NonNullable<
  typeof checkboxRecipe.variants
>['variant'];

export type CheckboxProps = CheckboxVariantProps & {
  name: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  invalid?: boolean;
  indeterminate?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  label?: ReactNode | string;
  paddingY?: BoxProps['paddingY'];
  fontWeight?: 'regular' | 'bold';
  variant?: CheckboxVariant;
  onChange?: (details: SwitchCheckedChangeDetails) => void;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      value,
      disabled = false,
      checked = false,
      invalid,
      indeterminate = false,
      readOnly = false,
      fullWidth = false,
      label,
      paddingY,
      fontWeight = 'regular',
      variant = 'alignCenter',
      onChange,
      ...props
    },
    ref,
  ) => {
    const recipe = useSlotRecipe({ key: 'checkbox' });
    const combinedProps = { ...props, variant };
    const [recipeProps] = recipe.splitVariantProps(combinedProps);
    const styles = recipe(recipeProps);

    return (
      <ChakraCheckbox.Root
        {...props}
        name={name}
        value={value}
        disabled={disabled}
        checked={indeterminate ? 'indeterminate' : checked}
        invalid={invalid}
        readOnly={readOnly}
        width={fullWidth ? 'full' : undefined}
        onCheckedChange={onChange}
        paddingY={paddingY}
        css={styles.root}
      >
        <ChakraCheckbox.HiddenInput ref={ref} />
        <ChakraCheckbox.Control css={styles.control} />
        {label && (
          <ChakraCheckbox.Label css={{ ...styles.label, fontWeight }}>
            {label}
          </ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    );
  },
);
