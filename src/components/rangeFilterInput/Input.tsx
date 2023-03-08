import React, { useState } from 'react';
import { NumberInput, NumberInputField } from '@chakra-ui/react';

import InputLeftElement from './InputLeftElement';

import {
  ChangeCallback,
  PickedNumberInputProps,
  RangeFilterInputField,
} from './index';

type InputGroupProps<Name> = {
  handleChange: (event: ChangeCallback<Name>) => void;
  inputProps: RangeFilterInputField<Name>;
  onBlur?: (event: ChangeCallback<Name>) => void;
  unit?: string;
  variant: 'inputLeft' | 'inputRight';
} & PickedNumberInputProps;

function Input<Name extends string>({
  handleChange,
  inputProps,
  onBlur,
  unit,
  variant,
  ...rest
}: InputGroupProps<Name>) {
  const [refocus, setRefocus] = useState(false);

  return (
    <NumberInput
      key={`${inputProps.name}-${inputProps.value}`}
      width="full"
      variant={variant}
      defaultValue={inputProps.value}
      name={inputProps.name}
      onChange={(_, value) => handleChange({ value, name: inputProps.name })}
      onBlur={(event) => {
        onBlur &&
          onBlur({
            value: Number(event.target.value) || undefined,
            name: inputProps.name,
          });
        setRefocus(false);
      }}
      onFocus={() => setRefocus(true)}
      {...rest}
    >
      {unit ? <InputLeftElement unit={unit} /> : null}
      <NumberInputField
        placeholder={inputProps.placeholder ? inputProps.placeholder : ''}
        fontSize="body"
        autoFocus={refocus}
      />
    </NumberInput>
  );
}

export default Input;
