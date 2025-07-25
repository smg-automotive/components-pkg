import { defineSlotRecipe } from '@chakra-ui/react';

export const accordionRecipe = defineSlotRecipe({
  slots: ['item', 'button', 'indicator', 'content', 'body'],
  className: 'chakra-accordion',
  base: {
    item: {
      borderTop: '1px',
      _last: {
        borderBottom: '1px',
      },
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      width: 'full',
      textStyle: 'heading4',
      paddingX: 'lg',
      paddingY: 'md',
      _hover: {
        cursor: 'pointer',
      },
    },
    indicator: {
      width: 'sm',
      height: 'sm',
      _open: {
        rotate: '180deg',
      },
    },
    content: {
      width: 'full',
      overflow: 'hidden',
      _open: {
        animationName: 'expand-height',
        animationDuration: 'moderate',
      },
      _closed: {
        animationName: 'collapse-height',
        animationDuration: 'moderate',
      },
    },
    body: {
      pb: 'md',
      paddingX: 'lg',
      fontSize: 'base',
      fontWeight: 'regular',
    },
  },
  variants: {
    variant: {
      light: {
        item: {
          color: 'gray.900',
          borderColor: 'gray.200',
          _last: {
            borderBottom: '1px',
            borderColor: 'gray.200',
          },
        },
        button: {
          _hover: {
            bg: 'gray.50',
          },
        },
        body: {
          textStyle: 'body',
        },
      },
      dark: {
        item: {
          borderColor: 'gray.700',
          bg: 'gray.900',
          color: 'white',
          _last: {
            borderColor: 'gray.700',
          },
        },
        button: {
          textStyle: 'heading5',
          _hover: {
            bg: 'gray.700',
          },
        },
        body: {
          textStyle: 'body-small',
        },
      },
      minimal: {
        item: {
          borderTop: 'none',
          _last: {
            borderBottom: 'none',
          },
        },
        button: {
          width: 'auto',
          textStyle: 'body',
          paddingX: '0',
          maxWidth: 'auto',
          _hover: {
            bg: 'transparent',
          },
        },
        indicator: {
          marginLeft: 'sm',
        },
        body: {
          pb: 'md',
          paddingX: '3xl',
          textStyle: 'body',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});
