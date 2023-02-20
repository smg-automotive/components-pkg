import React from 'react';
import { InputGroup, NumberInput, NumberInputField } from '@chakra-ui/react';

import Stack from '../stack';
import InputLeftElement from './InputLeftElement';

const RangeFilterInput = ({ unit }) => {
  return (
    <Stack direction="row" spacing={0}>
      <InputGroup>
        <NumberInput width="full">
          <InputLeftElement unit={unit} />
          <NumberInputField />
        </NumberInput>
      </InputGroup>

      <InputGroup>
        <NumberInput width="full" variant="outlineTo">
          <InputLeftElement unit={unit} />
          <NumberInputField />
        </NumberInput>
      </InputGroup>
    </Stack>
  );
};

export default RangeFilterInput;
