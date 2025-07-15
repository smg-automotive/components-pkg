import { defineSlotRecipe } from '@chakra-ui/react';

export const switchComponentRecipe = defineSlotRecipe({
  slots: ['root', 'control', 'thumb'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'sm',
    },
    control: {
      width: 'md',
      height: 'sm',
      bg: 'gray.300',
      borderRadius: 'xl',
      position: 'relative',
      transition: 'common',
      _checked: {
        bg: 'green.400',
      },
    },
    thumb: {
      width: 'sm',
      height: 'sm',
      bg: 'white',
      borderRadius: 'xl',
      position: 'absolute',
      top: '1px',
      left: '1px',
      transition: 'transform 0.2s',
      _checked: {
        transform: 'translateX(20px)',
      },
    },
  },
});
