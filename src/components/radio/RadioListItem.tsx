'use client';

import React, { forwardRef, PropsWithChildren } from 'react';
import { RadioGroup, useRecipe } from '@chakra-ui/react';

import { Box } from '../box';

type Props = PropsWithChildren<
  React.ComponentProps<typeof RadioGroup.Item> & {
    value: string;
  }
>;

export const RadioListItem = forwardRef<HTMLInputElement, Props>(
  ({ children, value, ...rest }, ref) => {
    const recipe = useRecipe({ key: 'radioListItem' });
    const styles = recipe();
    // This item is rendered as a label, so clicks inside children can bubble up
    // and toggle/select the radio item instead of interacting with nested controls.
    // We explicitly treat common form/interactive elements as "safe zones".
    const interactiveSelector =
      'input, textarea, select, button, a, [contenteditable="true"], [data-radiolist-interactive]';

    // Stop propagation only for nested interactive controls so:
    // 1) typing/focus in child inputs works on first click, and
    // 2) clicking non-interactive parts of the row still selects the radio item.
    const stopIfInteractiveTarget = (
      event: React.PointerEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
    ) => {
      const target = event.target;

      if (target instanceof Element && target.closest(interactiveSelector)) {
        event.stopPropagation();
      }
    };

    return (
      <RadioGroup.Item value={value} asChild {...rest}>
        <Box as="label" css={styles}>
          <RadioGroup.ItemHiddenInput ref={ref} />
          <Box
            onPointerDownCapture={stopIfInteractiveTarget}
            onClickCapture={stopIfInteractiveTarget}
          >
            {children}
          </Box>
        </Box>
      </RadioGroup.Item>
    );
  },
);

RadioListItem.displayName = 'RadioListItem';
