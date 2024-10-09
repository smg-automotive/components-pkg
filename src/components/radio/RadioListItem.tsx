import React, { forwardRef, PropsWithChildren } from 'react';
import { useRadio, UseRadioProps } from '@chakra-ui/react';

import Box from '../box';

export const RadioListItem = forwardRef<
  HTMLInputElement,
  PropsWithChildren<UseRadioProps>
>((props, ref) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const radioProps = getRadioProps();

  return (
    <Box as="label" width="full">
      <input {...input} ref={ref} />
      <Box
        {...radioProps}
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
