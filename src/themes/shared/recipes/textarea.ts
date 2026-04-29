import { defineRecipe } from '@chakra-ui/react';

export const textareaRecipe = defineRecipe({
  base: {
    paddingX: 'lg',
    paddingTop: 'md',
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    border: '1px',
    borderColor: 'gray.400',
    borderRadius: 'sm',
    color: 'gray.900',
    background: 'inherit',
    _placeholder: {
      color: 'gray.400',
    },
    _hover: {
      borderColor: 'gray.900',
    },
    _focus: {
      backgroundColor: 'blue.50',
    },
    _active: {},
    _invalid: {
      borderColor: 'red.500',
    },
    _disabled: {
      cursor: 'notAllowed',
      color: 'gray.300',
      borderColor: 'gray.200',
    },
  },
});
