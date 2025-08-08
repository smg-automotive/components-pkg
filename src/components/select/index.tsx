import React, { forwardRef } from 'react';
import {
  NativeSelect,
  NativeSelectFieldProps,
  NativeSelectRootProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { selectSlotRecipe } from 'src/themes/shared/slotRecipes/select';

import { ChevronDownLargeIcon } from '../icons';

export type Option<T extends string | number> = {
  value: T;
  label: string;
};

type OptionsAndValue<T extends string | number> = {
  options: Option<T>[];
  value?: T;
};

type SelectVariantProps = RecipeVariantProps<typeof selectSlotRecipe>;

export type Props = SelectVariantProps &
  Pick<NativeSelectRootProps, 'disabled' | 'invalid'> &
  NativeSelectFieldProps & {
    name: string;
  } & (OptionsAndValue<string> | OptionsAndValue<number>);

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, ...props }, ref) => {
    const selectRecipe = useSlotRecipe({ key: 'select' });
    const [selectRecipeProps] = selectRecipe.splitVariantProps(props);
    const selectStyles = selectRecipe(selectRecipeProps);

    const inputRecipe = useSlotRecipe({ key: 'input' });
    const [inputRecipeProps] = inputRecipe.splitVariantProps(props);
    const inputStyles = inputRecipe(inputRecipeProps);

    return (
      <NativeSelect.Root css={[inputStyles.root, selectStyles.root]}>
        <NativeSelect.Field ref={ref} css={selectStyles.field}>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </NativeSelect.Field>
        {/* <NativeSelect.Indicator css={{}}> */}
        <ChevronDownLargeIcon />
        {/* </NativeSelect.Indicator> */}
      </NativeSelect.Root>
    );
  },
);
Select.displayName = 'Select';

export default Select;
