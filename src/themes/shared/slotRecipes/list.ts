import { defineSlotRecipe } from '@chakra-ui/react';

export const listRecipe = defineSlotRecipe({
  className: 'chakra-list',
  slots: ['root', 'item', 'itemLabel', 'itemValue'],
  base: {
    root: {
      '--margin-end': '2',
      marginEnd: 'var(--margin-end)',
      display: 'inline',
      verticalAlign: 'text-bottom',
    },
  },
  variants: {
    size: {
      md: {
        root: {
          textStyle: 'body',
        },
      },
      sm: {
        root: {
          textStyle: 'body-small',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
