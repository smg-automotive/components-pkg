import React, { FC } from 'react';

import { InputLeftElement as ChakraInputLeftElement } from '@chakra-ui/react';

const InputLeftElement: FC<{ unit: string }> = ({ unit }) => {
  return (
    <ChakraInputLeftElement pointerEvents="none" paddingLeft="sm">
      {unit}
    </ChakraInputLeftElement>
  );
};

export default InputLeftElement;
