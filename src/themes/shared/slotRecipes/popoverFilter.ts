import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

const baseTriggerStyle = defineStyle({
  display: 'flex',
  justifyContent: 'space-between',
  width: 'full',
  paddingX: 'md',
  border: '1px',
  borderRadius: 'sm',
  cursor: 'pointer',
});

const baseCloseStyle = defineStyle({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 'md',
  border: '1px',
  borderRadius: 'sm',
  color: 'white',
  cursor: 'pointer',
  _hover: { backgroundColor: 'black' },
});

const baseContentStyle = defineStyle({
  width: '6xl',
  borderRadius: 'sm',
  backgroundColor: 'white',
  shadow: 'md',
});

const baseBodyStyle = defineStyle({
  maxHeight: '7xl',
  paddingX: '2xl',
  marginTop: '2xl',
  overflowY: 'auto',
});

export const popoverFilterRecipe = defineSlotRecipe({
  slots: ['trigger', 'close', 'content', 'body'],
  className: 'chakra-popover-filter',
  base: {
    trigger: baseTriggerStyle,
    close: baseCloseStyle,
    content: baseContentStyle,
    body: baseBodyStyle,
  },
});
