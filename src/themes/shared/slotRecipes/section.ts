import { defineSlotRecipe } from '@chakra-ui/react';

export const sectionRecipe = defineSlotRecipe({
  className: 'chakra-section',
  slots: ['title', 'text'],
  base: {
    title: { color: 'gray.900' },
    text: { color: 'gray.900' },
  },
  variants: {
    variant: {
      hero: {
        title: {
          textStyle: 'heading1',
        },
        text: {
          textStyle: 'body-large',
        },
      },
      regular: {
        title: {
          textStyle: 'heading2',
        },
        text: {
          textStyle: 'body',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'hero',
  },
});
