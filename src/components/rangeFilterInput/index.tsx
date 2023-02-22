import React, { FC } from 'react';
import {
  InputGroup,
  NumberInput,
  NumberInputField,
  NumberInputProps,
} from '@chakra-ui/react';

import Stack from '../stack';
import InputLeftElement from './InputLeftElement';

type RangeFilterInputField = {
  name: string;
  value?: number;
  placeholder?: string;
};

type ChangeCallback = {
  value: number;
  name: 'from' | 'to';
};

type RangeFilterInputProps = {
  from: RangeFilterInputField;
  to: RangeFilterInputField;
  handleChange: (event: ChangeCallback) => void;
  unit?: string;
  size?: 'md' | 'lg';
} & Pick<NumberInputProps, 'min' | 'max' | 'isDisabled'>;

const RangeFilterInput: FC<RangeFilterInputProps> = ({
  from,
  handleChange,
  to,
  unit,
  size,
  ...rest
}) => {
  return (
    <Stack direction="row" spacing={0}>
      <InputGroup>
        <NumberInput
          width="full"
          variant="fromOutline"
          defaultValue={from.value ? from.value : ''}
          name={from.name}
          size={size}
          onChange={(_, value) => handleChange({ value, name: 'from' })}
          {...rest}
        >
          {unit ? <InputLeftElement unit={unit} /> : null}
          <NumberInputField
            value={from.value ? from.value : ''}
            placeholder={from.placeholder ? from.placeholder : ''}
          />
        </NumberInput>
      </InputGroup>

      <InputGroup>
        <NumberInput
          width="full"
          variant="toOutline"
          defaultValue={to.value ? to.value : ''}
          name={to.name}
          size={size}
          onChange={(_, value) => handleChange({ value, name: 'to' })}
          {...rest}
        >
          {unit ? <InputLeftElement unit={unit} /> : null}
          <NumberInputField
            value={to.value ? to.value : ''}
            placeholder={to.placeholder ? to.placeholder : ''}
          />
        </NumberInput>
      </InputGroup>
    </Stack>
  );
};

export default RangeFilterInput;
