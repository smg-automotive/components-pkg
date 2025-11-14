import React, { forwardRef, PropsWithChildren } from 'react';
import { RadioGroup } from '@chakra-ui/react';

import { Box } from '../box';

type Props = PropsWithChildren<
  React.ComponentProps<typeof RadioGroup.Item> & { value: string }
>;

export const RadioListItem = forwardRef<HTMLInputElement, Props>(
  ({ children, value, ...rest }, ref) => {
    return (
      <RadioGroup.Item value={value} asChild {...rest}>
        <Box
          as="label"
          cursor="pointer"
          background="white"
          borderRadius="xs"
          _hover={{ bg: 'gray.50' }}
          _checked={{
            bg: 'blue.100',
            _hover: { bg: 'blue.100' },
          }}
          px="lg"
          py="sm"
        >
          <RadioGroup.ItemHiddenInput ref={ref} />
          {children}
        </Box>
      </RadioGroup.Item>
    );
  },
);

RadioListItem.displayName = 'RadioListItem';
