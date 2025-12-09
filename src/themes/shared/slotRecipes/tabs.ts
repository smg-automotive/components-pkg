import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

const baseTriggerStyle = defineStyle({
  textStyle: 'body',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  '--tabs-border-width': '3px',
  borderBottomWidth: 'var(--tabs-border-width)',
  borderBottomStyle: 'var(--tabs-border-style, solid)',
  borderBottomColor: 'transparent',
  p: 'md',
  color: 'gray.600',
  cursor: 'pointer',
  _selected: {
    fontWeight: 'bold',
    color: 'gray.900',
    borderBottomColor: 'currentColor',
  },
  _disabled: {
    _active: { bg: 'none' },
    cursor: 'notAllowed',
    color: 'gray.300',
  },
});

const baseListStyle = defineStyle({
  borderBottom: '1px',
  borderColor: 'gray.200',
  justifyContent: 'start',
});

const baseContentStyle = defineStyle({
  textStyle: 'body',
  m: 'sm',
});

export const tabsRecipe = defineSlotRecipe({
  slots: ['root', 'list', 'trigger', 'content', 'contentGroup'],
  className: 'chakra-tabs',
  base: {
    trigger: baseTriggerStyle,
    list: baseListStyle,
    content: baseContentStyle,
  },
  variants: {
    variant: {
      line: {},
      spaceBetween: {
        list: {
          justifyContent: 'space-between',
        },
      },
      spaceAround: {
        list: {
          justifyContent: 'space-around',
        },
      },
      enclosed: {
        list: {
          borderBottom: 'none',
        },
        trigger: {
          color: 'gray.700',
          fontWeight: 'bold',
          flexBasis: 'full',
          border: '1px',
          borderColor: 'blue.200',
          backgroundColor: 'blue.50',
          borderRight: 'none',
          '--tabs-border-width': '1px',
          _selected: {
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
          },
          _last: {
            borderRight: '1px',
            borderRightColor: 'blue.200',
          },
        },
        content: {
          m: '0',
        },
      },
      fullWidth: {
        trigger: {
          flex: 1,
        },
        content: {
          m: '0',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'line',
  },
});
