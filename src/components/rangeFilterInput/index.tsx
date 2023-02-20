import React, { FC } from 'react';
import {
  InputGroup,
  NumberInput,
  NumberInputField,
  NumberInputProps,
} from '@chakra-ui/react';

import Stack from '../stack';
import InputLeftElement from './InputLeftElement';

type InputElement = 'from' | 'to';

type ChangeCallback = {
  touched: InputElement;
  value: {
    from: number;
    to: number;
  };
};

type RangeFilterInputProps = {
  name: {
    from: string;
    to: string;
  };
  handleChange: (event: ChangeCallback) => void;
  placeholder?: {
    from: string;
    to: string;
  };
  unit?: string;
  value: {
    from: number;
    to: number;
  };
  size?: 'md' | 'lg';
} & Pick<NumberInputProps, 'min' | 'max' | 'isDisabled'>;

const RangeFilterInput: FC<RangeFilterInputProps> = ({
  name,
  handleChange,
  placeholder,
  unit,
  value,
  size = 'md',
  ...rest
}) => {
  return (
    <Stack direction="row" spacing={0}>
      {Object.keys(name).map((elem: string) => {
        const inputFieldElement = elem as InputElement;

        return (
          <InputGroup key={inputFieldElement}>
            <NumberInput
              width="full"
              variant={`${inputFieldElement}Outline`}
              defaultValue={value ? value[inputFieldElement] : ''}
              size={size}
              name={name[inputFieldElement]}
              onChange={(val) =>
                handleChange({
                  touched: inputFieldElement,
                  value: { ...value, [inputFieldElement]: val },
                })
              }
              {...rest}
            >
              {unit ? <InputLeftElement unit={unit} /> : null}
              <NumberInputField
                value={value ? value[inputFieldElement] : ''}
                placeholder={placeholder ? placeholder[inputFieldElement] : ''}
              />
            </NumberInput>
          </InputGroup>
        );
      })}
    </Stack>
  );
};

export default RangeFilterInput;
