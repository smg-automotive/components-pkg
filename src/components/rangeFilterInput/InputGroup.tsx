import React, { useState } from 'react';
import {
  NumberInput,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { numberInputRecipe } from 'src/themes/shared/slotRecipes/numberInput';

import { InputLeftElement } from './InputLeftElement';

import {
  ChangeCallback,
  PickedNumberInputProps,
  RangeFilterInputField,
} from './index';

type NumberInputVariantProps = RecipeVariantProps<typeof numberInputRecipe>;

type InputGroupProps<Name extends string> = NumberInputVariantProps & {
  handleChange: (event: ChangeCallback<Name>) => void;
  inputProps: RangeFilterInputField<Name>;
  onBlur?: (event: ChangeCallback<Name>) => void;
  unit?: string;
} & PickedNumberInputProps;

export const InputGroup = <Name extends string>({
  handleChange,
  inputProps,
  onBlur,
  unit,
  ...rest
}: InputGroupProps<Name>) => {
  const [refocus, setRefocus] = useState(false);

  const recipe = useSlotRecipe({ key: 'numberInput' });

  const [recipeProps, restProps] = recipe.splitVariantProps(rest);

  const styles = recipe(recipeProps);

  return (
    <NumberInput.Root
      key={`${inputProps.name}-${inputProps.value}`}
      css={styles.root}
      width="full"
      defaultValue={
        inputProps.value != null ? String(inputProps.value) : undefined
      }
      onValueChange={({ valueAsNumber }) =>
        handleChange({
          value: valueAsNumber || undefined,
          name: inputProps.name,
        })
      }
      onBlur={(event) => {
        onBlur?.({
          value: Number((event.target as HTMLInputElement).value) || undefined,
          name: inputProps.name,
        });
        setRefocus(false);
      }}
      onFocus={() => setRefocus(true)}
      {...restProps}
    >
      {unit ? <InputLeftElement unit={unit} /> : null}

      <NumberInput.Input
        css={styles.input}
        placeholder={inputProps.placeholder ?? ''}
        autoFocus={refocus}
        aria-label={inputProps.ariaLabel}
        fontSize="base"
      />
    </NumberInput.Root>
  );
};
