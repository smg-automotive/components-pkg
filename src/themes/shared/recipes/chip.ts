import { defineRecipe } from '@chakra-ui/react';

export const chipRecipe = defineRecipe({
  className: 'chakra-chip',
  base: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 'full',
    outline: 'none',
    cursor: 'pointer',
    px: 'md',
    py: 'sm',
    minH: 'sm',
    w: 'fit',
    flexShrink: 0,
  },
  variants: {
    variant: {
      default: {
        bg: 'white',
        border: '1px',
        borderColor: 'gray.200',
        _hover: {
          bg: 'white',
          borderColor: 'black',
          _active: { bg: 'gray.100', borderColor: 'gray.200' },
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'blue.300',
          outlineOffset: 0,
        },
      },
      selected: {
        bg: 'blue.100',
        border: '1px',
        borderColor: 'transparent',
        _hover: { bg: 'blue.50', _active: { bg: 'blue.200' } },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'blue.300',
          outlineOffset: 0,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
