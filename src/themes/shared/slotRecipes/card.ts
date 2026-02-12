import { defineSlotRecipe } from '@chakra-ui/react';

export const cardRecipe = defineSlotRecipe({
  className: 'chakra-card',
  slots: ['root', 'header', 'body', 'footer'],
  base: {
    root: {
      backgroundColor: 'white',
      borderRadius: 'sm',
      boxShadow: 'xs',
      overflowWrap: 'break-word',
      overflow: 'hidden',
    },
    header: {
      paddingX: '2xl',
      marginY: '2xl',
    },
    body: {
      paddingX: '2xl',
      marginY: '2xl',
    },
    footer: {
      borderTop: '1px',
      borderColor: 'gray.100',
      paddingX: 'lg',
      paddingY: 'md',
    },
  },
});
