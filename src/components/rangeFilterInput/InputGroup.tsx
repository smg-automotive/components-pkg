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

function InputGroup<Name extends string>({
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
      defaultValue={inputProps.value as number | string | undefined}
      name={inputProps.name}
      onChange={(_, value) =>
        handleChange({ value: value || undefined, name: inputProps.name })
      }
      onBlur={(event) => {
        onBlur?.({
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
        fontSize="base"
        autoFocus={refocus}
        aria-label={inputProps.ariaLabel}
      />
    </NumberInput>
  );
}

export default InputGroup;
