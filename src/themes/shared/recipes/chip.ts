import { defineRecipe } from '@chakra-ui/react';

export const chipRecipe = defineRecipe({
  className: 'chakra-chip',
  base: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 'full',
    outline: 'none',
    cursor: 'pointer',
    py: 'sm',
    minH: 'sm',
    w: 'fit',
    flexShrink: 0,
    border: '1px',
    borderStyle: 'var(--chip-border-style, solid)',
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'blue.300',
      outlineOffset: 0,
    },
    bg: 'white',
    px: '2xl',
    borderColor: 'gray.200',
  },
  variants: {
    variant: {
      solid: {
        '--chip-border-style': 'solid',
      },
      dashed: {
        '--chip-border-style': 'dashed',
      },
    },
    selected: {
      false: {
        _hover: {
          bg: 'white',
          borderColor: 'black',
          _active: { bg: 'gray.100', borderColor: 'gray.200' },
        },
      },
      true: {
        bg: 'blue.100',
        px: 'md',
        borderColor: 'transparent',
        _hover: { bg: 'blue.50', _active: { bg: 'blue.200' } },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    selected: false,
  },
});
