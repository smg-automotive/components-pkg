import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

const baseStyleDialog = defineStyle({
  _open: {
    animationName: 'fade-in',
    animationDuration: 'normal',
  },
  _closed: {
    animationName: 'fade-out',
    animationDuration: 'normal',
  },
});

export const dialogFilterRecipe = defineSlotRecipe({
  slots: ['content'],
  className: 'chakra-dialog',
  base: {
    content: baseStyleDialog,
  },
});
