import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  base: {
    textStyle: 'body',
    color: 'blue.700',
    display: 'inline-flex',
    gap: 'md',
    flexDirection: 'row',
    _active: {
      textDecoration: 'none',
      color: 'gray.900',
    },
    _disabled: {
      textDecoration: 'none',
      color: 'gray.500',
    },
  },

  variants: {
    variant: {
      baseLink: {
        _hover: {
          cursor: 'pointer',
          textDecoration: 'underline',
        },
      },
      navigationLink: {
        color: 'gray.900',
        cursor: 'pointer',
        fontSize: 'base',
        _hover: {
          textDecoration: 'none',
          color: 'blue.700',
        },
      },
      subNavigationLink: {
        color: 'gray.900',
        cursor: 'pointer',
        fontSize: 'base',
        _hover: {
          textDecoration: 'underline',
        },
        _focusVisible: {
          outline: 'none',
        },
      },
      footerLink: {
        color: 'white',
        _hover: {
          textDecoration: 'underline',
        },
        _active: {
          color: 'gray.50',
        },
        _visited: {
          color: 'white',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'baseLink',
  },
});
