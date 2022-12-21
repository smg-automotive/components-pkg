import React, { forwardRef, PropsWithChildren } from 'react';
import { useRadio, UseRadioProps } from '@chakra-ui/react';

import Box from '../box';

export const RadioListItem = forwardRef<
  HTMLInputElement,
  PropsWithChildren<UseRadioProps>
>((props, ref) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" width="full">
      <input {...input} ref={ref} />
      <Box
        {...checkbox}
        cursor="pointer"
        background="white"
        borderRadius="md"
        _hover={{
          bg: 'gray.50',
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
});
RadioListItem.displayName = 'RadioListItem';
