import { defineSlotRecipe } from '@chakra-ui/react';

export const articleTeaserRecipe = defineSlotRecipe({
  slots: ['title', 'text'],
  base: {
    title: {
      textStyle: 'heading3',
      color: 'blue.700',
    },
    text: {
      textStyle: 'body',
      color: 'gray.900',
    },
  },
});
