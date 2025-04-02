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

export type CheckboxProps = CheckboxVariantProps & {
  name: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  invalid?: boolean;
  indeterminate?: boolean;
  readOnly?: boolean;
  label?: ReactNode | string;
  paddingY?: BoxProps['paddingY'];
  fontWeight?: 'regular' | 'bold';
  variant?: 'alignCenter' | 'alignTop' | 'alignTopForSmallSize';
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
