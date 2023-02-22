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
  'min' | 'max' | 'isDisabled' | 'onFocus'
>;

type RangeFilterInputProps = {
  from: RangeFilterInputField;
  to: RangeFilterInputField;
  handleChange: (event: ChangeCallback) => void;
  unit?: string;
  size?: 'md' | 'lg';
} & PickedNumberInputProps;

const RangeFilterInput: FC<RangeFilterInputProps> = ({
  from,
  to,
  handleChange,
  unit,
  size,
  ...rest
}) => {
  return (
    <Stack direction="row" spacing={0}>
      <InputGroup
        inputProps={from}
        variant="inputLeft"
        handleChange={handleChange}
        unit={unit}
        {...rest}
      />

      <InputGroup
        inputProps={to}
        variant="inputRight"
        handleChange={handleChange}
        unit={unit}
        {...rest}
      />
    </Stack>
  );
};

export default RangeFilterInput;
