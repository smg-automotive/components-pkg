import { useDebouncedCallback } from 'use-debounce';
import React, { FC } from 'react';
import { NumberInputProps } from '@chakra-ui/react';

import Stack from '../stack';
import InputGroup from './InputGroup';

export type RangeFilterInputField = {
  name: string;
  value?: number;
  placeholder?: string;
};

export type ChangeCallback = {
  value: number;
  name: 'from' | 'to';
};

export type PickedNumberInputProps = Pick<
  NumberInputProps,
  'min' | 'max' | 'isDisabled' | 'onFocus' | 'onBlur'
>;

type RangeFilterInputProps = {
  from: RangeFilterInputField;
  to: RangeFilterInputField;
  handleChange: (event: ChangeCallback) => void;
  unit?: string;
  debounce?: boolean;
} & PickedNumberInputProps;

const RangeFilterInput: FC<RangeFilterInputProps> = ({
  from,
  to,
  handleChange,
  unit,
  debounce = true,
  ...rest
}) => {
  const debounceThreshold = debounce ? 1000 : 0;
  const handleChangeDebounced = useDebouncedCallback(
    handleChange,
    debounceThreshold
  );

  return (
    <Stack direction="row" spacing={0}>
      <InputGroup
        inputProps={from}
        variant="inputLeft"
        handleChange={handleChangeDebounced}
        unit={unit}
        {...rest}
      />

      <InputGroup
        inputProps={to}
        variant="inputRight"
        handleChange={handleChangeDebounced}
        unit={unit}
        {...rest}
      />
    </Stack>
  );
};

export default RangeFilterInput;
