import { defineSlotRecipe } from '@chakra-ui/react';

export const ratingGroupRecipe = defineSlotRecipe({
  className: 'chakra-rating-group',
  slots: ['root', 'control', 'item', 'itemIndicator'],
  base: {
    root: {
      display: 'inline-flex',
    },

    control: {
      display: 'inline-flex',
      alignItems: 'center',
    },

    item: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
    },

    itemIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1em',
      height: '1em',
      position: 'relative',
      overflow: 'hidden', // Ensure no overflow in the filled part of the star

      _icon: {
        stroke: 'yellow',
        width: '100%',
        height: '100%',
        display: 'inline-block',
        flexShrink: 0,
        position: 'absolute',
        left: 0,
        top: 0,
      },

      '& [data-bg]': {
        color: 'white', // Color for empty stars
      },

      // '& [data-fg]': {
      //   color: 'white',
      // },

      '& [data-fg]': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        color: 'pink', // Color for filled stars
        clipPath: 'inset(0 calc(100% - var(--rating-percent)) 0 0)', // Clip based on the fractional rating
      },

      '&[data-highlighted]:not([data-half])': {
        '& [data-fg]': {
          color: 'red',
        },
      },

      '&[data-half]': {
        '& [data-fg]': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: 'yellow', // Color for filled stars
        },
      },
    },
  },

  variants: {
    size: {
      sm: {
        item: {
          textStyle: '7xl',
        },
      },
      lg: {
        item: {
          textStyle: 'md',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
});
