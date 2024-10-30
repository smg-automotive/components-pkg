import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';
import { inputAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const $height = cssVar('input-height');
const $paddingX = cssVar('input-padding-x');
const $paddingY = cssVar('input-padding-y');

const baseStyle = definePartsStyle({
  field: {
    width: 'full',
    height: $height.reference,
    px: $paddingX.reference,
    py: $paddingY.reference,
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
});

const size = {
  lg: defineStyle({
    textStyle: 'body',
    [$paddingX.variable]: 'space.md',
    [$paddingY.variable]: 'space.xs',
    [$height.variable]: 'sizes.lg',
  }),
  md: defineStyle({
    textStyle: 'body',
    [$paddingX.variable]: 'space.md',
    [$paddingY.variable]: 'space.xs',
    [$height.variable]: 'sizes.md',
  }),
};

const sizes = {
  lg: definePartsStyle({
    field: size.lg,
    group: size.lg,
  }),
  md: definePartsStyle({
    field: size.md,
    group: size.md,
  }),
};

const variantOutline = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'gray.400',
    borderRadius: 'sm',
    bg: 'inherit',
    color: 'gray.900',
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
      cursor: 'not-allowed',
      color: 'gray.300',
      borderColor: 'gray.200',
    },
  },
});

const variants = {
  outline: variantOutline,
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
