import { defineSlotRecipe } from '@chakra-ui/react';

export const numberInputRecipe = defineSlotRecipe({
  className: 'chakra-number-input',
  slots: [
    'root',
    'input',
    'control',
    'incrementTrigger',
    'decrementTrigger',
  ] as const,

  base: {
    root: {},
    input: {
      w: 'full',
      minW: '0',
      outline: 0,
      pos: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      px: 'md',
      py: 'xs',
      textAlign: 'right',
    },
    control: { h: 'full' },
    incrementTrigger: {},
    decrementTrigger: {},
  },

  variants: {
    variant: {
      outline: {
        input: {
          border: '1px',
          borderColor: 'gray.400',
          borderRadius: 'sm',
          bg: 'inherit',
          color: 'gray.900',
          _placeholder: { color: 'gray.400' },
          _hover: { borderColor: 'gray.900' },
          _focus: { bg: 'blue.50' },
          _invalid: { borderColor: 'red.500' },
          _disabled: {
            cursor: 'notAllowed',
            color: 'gray.300',
            borderColor: 'gray.200',
          },
        },
      },

      inputLeft: {
        input: {
          border: '1px',
          borderColor: 'gray.400',
          borderRadius: 'sm',
          bg: 'inherit',
          color: 'gray.900',
          _placeholder: { color: 'gray.400' },
          _hover: { borderColor: 'gray.900' },
          _focus: { bg: 'blue.50' },
          _invalid: { borderColor: 'red.500' },
          _disabled: {
            cursor: 'notAllowed',
            color: 'gray.300',
            borderColor: 'gray.200',
          },
          borderEndRadius: 'none',
          borderEnd: 'none',
        },
      },
      inputRight: {
        input: {
          border: '1px',
          borderColor: 'gray.400',
          borderRadius: 'sm',
          bg: 'inherit',
          color: 'gray.900',
          _placeholder: { color: 'gray.400' },
          _hover: { borderColor: 'gray.900' },
          _focus: { bg: 'blue.50' },
          _invalid: { borderColor: 'red.500' },
          _disabled: {
            cursor: 'notAllowed',
            color: 'gray.300',
            borderColor: 'gray.200',
          },

          borderStartRadius: 'none',
        },
      },
    },

    size: {
      lg: { input: { textStyle: 'body', h: 'lg' } },
    },
  },

  defaultVariants: {
    variant: 'outline',
  },
});
