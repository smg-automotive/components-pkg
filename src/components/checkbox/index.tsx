import React, { forwardRef, ReactNode } from 'react';
import {
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
  isDisabled?: boolean;
  isChecked?: boolean;
  isInvalid?: boolean;
  isIndeterminate?: boolean;
  readOnly?: boolean;
  label?: ReactNode | string;
  onChange?: (details: SwitchCheckedChangeDetails) => void;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      value,
      isDisabled = false,
      isChecked = false,
      isInvalid,
      isIndeterminate = false,
      readOnly = false,
      label,
      onChange,
      ...props
    },
    ref,
  ) => {
    const recipe = useSlotRecipe({ key: 'checkbox' });
    const [recipeProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    return (
      <ChakraCheckbox.Root
        name={name}
        value={value}
        disabled={isDisabled}
        checked={isIndeterminate ? 'indeterminate' : isChecked}
        invalid={isInvalid}
        readOnly={readOnly}
        onCheckedChange={onChange}
        css={styles.root}
      >
        <ChakraCheckbox.HiddenInput ref={ref} />
        <ChakraCheckbox.Control css={styles.control} />
        {label && (
          <ChakraCheckbox.Label css={styles.label}>
            {label}
          </ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    );
  },
);
