'use client';

import { useDebouncedCallback } from 'use-debounce';
import React, { useEffect, useState } from 'react';
import {
  NumberInput,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { numberInputRecipe } from 'src/themes/shared/slotRecipes/numberInput';

import { InputLeftElement } from './InputLeftElement';

import type {
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

const parseToNumberOrUndef = (raw: string) => {
  if (raw.trim() === '') return undefined;
  const n = Number(raw);
  return Number.isNaN(n) ? undefined : n;
};

export const InputGroup = <Name extends string>({
  handleChange,
  inputProps,
  onBlur,
  unit,
  ...rest
}: InputGroupProps<Name>) => {
  const recipe = useSlotRecipe({ key: 'numberInput' });
  const [recipeProps, restProps] = recipe.splitVariantProps(rest);
  const styles = recipe(recipeProps);

  /**
   * Local string state that represents exactly what the user typed.
   *
   * Why string:
   * - Allows intermediate values ("1" → "10" → "100")
   * - Prevents cursor jumps and unstable behavior
   * - Most stable approach with Chakra v3 NumberInput
   */
  const [raw, setRaw] = useState(
    inputProps.value != null ? String(inputProps.value) : '',
  );

  /**
   * Sync external value changes (e.g. slider moved) back into the input.
   * Without this, the input would display stale values.
   */

  useEffect(() => {
    setRaw(inputProps.value != null ? String(inputProps.value) : '');
  }, [inputProps.value]);

  /**
   * Debounced emit PER INPUT (important!)
   *
   * Why per-input debounce:
   * - Shared debounce caused race conditions between FROM / TO inputs
   * - Each input must control its own timing
   *
   */
  const debouncedEmit = useDebouncedCallback((nextRaw: string) => {
    handleChange({
      name: inputProps.name,
      value: parseToNumberOrUndef(nextRaw),
    });
  }, 1000);

  return (
    <NumberInput.Root
      css={styles.root}
      width="full"
      // Update local string immediately
      value={raw}
      onValueChange={({ value }) => {
        setRaw(value);
        debouncedEmit(value);
      }}
      /**
       * On blur we emit immediately as a safety net,
       * ensuring the final value is always propagated.
       */
      onBlur={() => {
        onBlur?.({
          name: inputProps.name,
          value: parseToNumberOrUndef(raw),
        });
      }}
      {...restProps}
    >
      {unit ? <InputLeftElement unit={unit} /> : null}

      <NumberInput.Input
        css={styles.input}
        placeholder={inputProps.placeholder ?? ''}
        aria-label={inputProps.ariaLabel}
        fontSize="base"
      />
    </NumberInput.Root>
  );
};
