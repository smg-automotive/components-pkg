import { defineSlotRecipe } from '@chakra-ui/react';

export const breadcrumbsRecipe = defineSlotRecipe({
  className: 'chakra-breadcrumbs',
  slots: ['container', 'list', 'link', 'separator'],
  base: {
    container: {
      color: 'gray.900',
    },
    list: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    link: {
      color: 'blue.700',
    },
    separator: {
      mx: 'sm',
      color: 'gray.600',
    },
  },
});
