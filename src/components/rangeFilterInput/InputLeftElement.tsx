import React, { FC } from 'react';

import { InputElement } from '@chakra-ui/react';

export const InputLeftElement: FC<{ unit: string }> = ({ unit }) => {
  return (
    <InputElement
      insetY="0"
      px="sm"
      textStyle="body-small"
      pointerEvents="none"
    >
      {unit}
    </InputElement>
  );
};
