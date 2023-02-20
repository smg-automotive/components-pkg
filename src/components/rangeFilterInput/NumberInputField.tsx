import React, { FC } from 'react';
import { NumberInputField as ChakraNumberInputField } from '@chakra-ui/react';

type Side = 'from' | 'to';

type NumberInputFieldProps = {
  unit?: string;
  side: Side;
};

const NumberInputField: FC<NumberInputFieldProps> = ({ unit, side }) => {
  return (
    <ChakraNumberInputField
    // paddingLeft={unit ? 'sm' : 'xs'}
    // border="1px solid"
    // borderColor="gray.400"
    // borderRadius="xs"
    // borderTopRightRadius={side === 'from' ? '0' : 'xs'}
    // borderBottomRadius={side === 'from' ? '0' : 'xs'}
    // borderTopLeftRadius={side === 'to' ? '0' : 'xs'}
    // borderBottomLeftRadius={side === 'to' ? '0' : 'xs'}
    />
  );
};

export default NumberInputField;
