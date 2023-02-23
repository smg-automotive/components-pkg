import React, { FC, FocusEvent } from 'react';
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
  onBlur?: (event: ChangeCallback) => void;
  unit?: string;
  variant: 'inputLeft' | 'inputRight';
} & PickedNumberInputProps;

const InputGroup: FC<InputGroupProps> = ({
  handleChange,
  inputProps,
  onBlur,
  unit,
  variant,
  ...rest
}) => {
  const inputVariantName = variant === 'inputLeft' ? 'from' : 'to';
  return (
    <ChakraInputGroup>
      <NumberInput
        width="full"
        variant={variant}
        defaultValue={inputProps.value ? inputProps.value : ''}
        name={inputProps.name}
        onChange={(_, value) => handleChange({ value, name: inputVariantName })}
        onBlur={
          onBlur
            ? (event: FocusEvent<HTMLInputElement>) => {
                onBlur({
                  value: Number(event.target.value),
                  name: inputVariantName,
                });
              }
            : undefined
        }
        {...rest}
      >
        {unit ? <InputLeftElement unit={unit} /> : null}
        <NumberInputField
          value={inputProps.value ? inputProps.value : ''}
          placeholder={inputProps.placeholder ? inputProps.placeholder : ''}
          fontSize="body"
        />
      </NumberInput>
    </ChakraInputGroup>
  );
};

export default InputGroup;
