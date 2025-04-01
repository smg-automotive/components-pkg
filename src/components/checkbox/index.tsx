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
  paddingY?: string;
  fontWeight?: 'regular' | 'bold';
  variant?: 'alignCenter' | 'alignTop' | 'alignTopForSmallSize';
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
      paddingY,
      fontWeight = 'regular',
      variant = 'alignCenter',
      onChange,
      ...props
    },
    ref,
  ) => {
    const recipe = useSlotRecipe({ key: 'checkbox' });
    const combinedProps = { ...props, variant, paddingY };
    const [recipeProps] = recipe.splitVariantProps(combinedProps);
    const styles = recipe(recipeProps);

    const rootStyles = {
      ...styles.root,
      ...(paddingY && { paddingTop: paddingY, paddingBottom: paddingY }),
    };

    return (
      <ChakraCheckbox.Root
        name={name}
        value={value}
        disabled={isDisabled}
        checked={isIndeterminate ? 'indeterminate' : isChecked}
        invalid={isInvalid}
        readOnly={readOnly}
        onCheckedChange={onChange}
        css={rootStyles}
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
