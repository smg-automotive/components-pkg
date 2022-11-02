import React, { FC, PropsWithChildren } from 'react';
import { useRadio, UseRadioProps } from '@chakra-ui/react';

import { Box } from '../index';

export const RadioListItem: FC<PropsWithChildren<UseRadioProps>> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" width="full">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        background="white"
        borderRadius="md"
        _hover={{
          bg: 'gray.100',
        }}
        _checked={{
          bg: 'blue.100',
        }}
        px="lg"
        py="sm"
      >
        {props.children}
      </Box>
    </Box>
  );
};
