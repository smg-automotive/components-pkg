import React, { FC } from 'react';
import {
  InputGroup as ChakraInputGroup,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

import InputLeftElement from './InputLeftElement';

import {
  ChangeCallback,
  PickedNumberInputProps,
  RangeFilterInputField,
} from './index';

type InputGroupProps = {
  handleChange: (event: ChangeCallback) => void;
  inputProps: RangeFilterInputField;
  unit?: string;
  variant: 'inputLeft' | 'inputRight';
} & PickedNumberInputProps;

const InputGroup: FC<InputGroupProps> = ({
  handleChange,
  inputProps,
  unit,
  variant,
  ...rest
}) => {
  return (
    <ChakraInputGroup>
      <NumberInput
        width="full"
        variant={variant}
        defaultValue={inputProps.value ? inputProps.value : ''}
        name={inputProps.name}
        onChange={(_, value) =>
          handleChange({ value, name: variant === 'inputLeft' ? 'from' : 'to' })
        }
        {...rest}
      >
        {unit ? <InputLeftElement unit={unit} /> : null}
        <NumberInputField
          value={inputProps.value ? inputProps.value : ''}
          placeholder={inputProps.placeholder ? inputProps.placeholder : ''}
        />
      </NumberInput>
    </ChakraInputGroup>
  );
};

export default InputGroup;
