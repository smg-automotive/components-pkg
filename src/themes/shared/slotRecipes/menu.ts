import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

const maximumScrollbarWidth = 20;

const content = defineStyle({
  '--max-width': `calc(100vw - ${maximumScrollbarWidth}px)`,
  bg: 'white',
  boxShadow: 'sm',
  color: 'inherit',
  minW: '4xl',
  maxW: 'var(--max-width)',
  py: 'xxs',
  zIndex: 'dropdown',
  borderRadius: 'sm',
  border: '1px',
  borderColor: 'gray.200',
  cursor: 'pointer',
  _focusVisible: {
    outline: 'none',
  },
  _open: {
    animationStyle: 'scale-fade-in',
    animationDuration: 'fast',
  },
  _closed: {
    animationStyle: 'scale-fade-out',
    animationDuration: 'fast',
  },
});

const item = defineStyle({
  display: 'flex',
  paddingY: 'md',
  paddingX: 'lg',
  cursor: 'pointer',
  _focus: {
    bg: 'gray.100',
  },
  _focusVisible: {
    outline: 'none',
  },
  _active: {
    bg: 'blue.100',
  },
  _expanded: {
    bg: 'gray.100',
  },
  _hover: {
    bg: 'gray.100',
  },
  _disabled: {
    opacity: '40',
    cursor: 'notAllowed',
  },
});

const trigger = defineStyle({
  display: 'inline-flex',
  padding: '0',
  cursor: 'pointer',
  _focusVisible: {
    outline: 'none',
  },
});

export const menuRecipe = defineSlotRecipe({
  slots: ['content', 'item', 'trigger'],
  className: 'chakra-menu',
  base: {
    content,
    item,
    trigger,
  },
});
