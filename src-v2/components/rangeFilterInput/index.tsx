import { useDebouncedCallback } from 'use-debounce';
import React from 'react';
import {
  InputGroup as ChakraInputGroup,
  NumberInputProps,
} from '@chakra-ui/react';

import InputGroup from './InputGroup';

export type RangeFilterInputField<Name> = {
  name: Name;
  value?: number | null;
  placeholder?: string;
  ariaLabel?: string;
};

export type ChangeCallback<Name> = {
  value?: number | null;
  name: Name;
};

export type PickedNumberInputProps = Pick<
  NumberInputProps,
  'min' | 'max' | 'isDisabled' | 'onFocus'
>;

type RangeFilterInputProps<NameFrom, NameTo> = {
  from: RangeFilterInputField<NameFrom>;
  handleChange: (event: ChangeCallback<NameFrom | NameTo>) => void;
  onBlur?: (event: ChangeCallback<NameFrom | NameTo>) => void;
  to: RangeFilterInputField<NameTo>;
  unit?: string;
} & PickedNumberInputProps;

function RangeFilterInput<NameFrom extends string, NameTo extends string>({
  from,
  to,
  handleChange,
  unit,
  onBlur,
  ...rest
}: RangeFilterInputProps<NameFrom, NameTo>) {
  const handleChangeDebounced = useDebouncedCallback(handleChange, 1000);

  return (
    <ChakraInputGroup display="flex">
      <InputGroup
        inputProps={from}
        variant="inputLeft"
        handleChange={handleChangeDebounced}
        onBlur={onBlur}
        unit={unit}
        {...rest}
      />

      <InputGroup
        inputProps={to}
        variant="inputRight"
        handleChange={handleChangeDebounced}
        onBlur={onBlur}
        unit={unit}
        {...rest}
      />
    </ChakraInputGroup>
  );
}

export default RangeFilterInput;
