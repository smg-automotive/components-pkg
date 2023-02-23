import { useDebouncedCallback } from 'use-debounce';
import React, { FC, FocusEventHandler } from 'react';
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
  'min' | 'max' | 'isDisabled' | 'onFocus'
>;

type RangeFilterInputProps = {
  debounce?: boolean;
  from: RangeFilterInputField;
  handleChange: (event: ChangeCallback) => void;
  onBlur?: (event: ChangeCallback) => void;
  to: RangeFilterInputField;
  unit?: string;
} & PickedNumberInputProps;

const RangeFilterInput: FC<RangeFilterInputProps> = ({
  from,
  to,
  handleChange,
  unit,
  debounce = true,
  onBlur,
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
        onBlur={onBlur}
        unit={unit}
        {...rest}
      />

      <InputGroup
        inputProps={to}
        variant="inputRight"
        handleChange={handleChangeDebounced}
        onBlur={onBlur ? onBlur : undefined}
        unit={unit}
        {...rest}
      />
    </Stack>
  );
};

export default RangeFilterInput;
