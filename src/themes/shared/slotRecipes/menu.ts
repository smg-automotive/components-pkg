import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

import { opacity } from '../tokens/opacity';

const maximumScrollbarWidth = 20;

const baseStyleContent = defineStyle({
  bg: 'white',
  boxShadow: 'sm',
  color: 'inherit',
  minW: 'xxs',
  maxW: `calc(100vw - ${maximumScrollbarWidth}px)`,
  py: 'xxs',
  zIndex: 'dropdown',
  borderRadius: 'sm',
  border: '1px',
  borderColor: 'gray.200',
});

const baseStyleItem = defineStyle({
  paddingY: 'md',
  paddingX: 'lg',
  transitionProperty: 'background',
  transitionDuration: 'fast',
  transitionTimingFunction: 'ease-in',
  _focus: {
    bg: 'gray.100',
  },
  _active: {
    bg: 'blue.100',
  },
  _expanded: {
    bg: 'gray.100',
  },
  _disabled: {
    opacity: '40',
    cursor: 'notAllowed',
  },
});

export const menuRecipe = defineSlotRecipe({
  slots: ['content', 'item'],
  className: 'chakra-menu',
  base: {
    content: baseStyleContent,
    item: baseStyleItem,
  },
});
