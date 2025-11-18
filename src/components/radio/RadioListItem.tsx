'use client';

import React, { forwardRef, PropsWithChildren } from 'react';
import { RadioGroup, useSlotRecipe } from '@chakra-ui/react';

import { Box } from '../box';

type Props = PropsWithChildren<
  React.ComponentProps<typeof RadioGroup.Item> & {
    value: string;
  }
>;

export const RadioListItem = forwardRef<HTMLInputElement, Props>(
  ({ children, value, ...rest }, ref) => {
    const recipe = useSlotRecipe({ key: 'radioListItem' });

    const styles = recipe();

    return (
      <RadioGroup.Item value={value} asChild {...rest}>
        <Box as="label" css={styles.root}>
          <RadioGroup.ItemHiddenInput ref={ref} />
          {children}
        </Box>
      </RadioGroup.Item>
    );
  },
);

RadioListItem.displayName = 'RadioListItem';
