import { defineSlotRecipe } from '@chakra-ui/react';

export const listRecipe = defineSlotRecipe({
  className: 'chakra-list',
  slots: ['root', 'item', 'itemLabel', 'itemValue', 'icon'],
  base: {
    icon: {
      marginEnd: '2',
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
    variant: {
      'icon-inside': {
        root: {
          listStylePosition: 'inside',
        },
      },
      'icon-outside': {
        root: {
          listStylePosition: 'outside',
          marginInlineStart: '1em',
          paddingInlineStart: 0,
          display: 'block',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'icon-inside',
  },
});
