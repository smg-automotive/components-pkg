import { cssVar } from '@chakra-ui/theme-tools';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const $size = cssVar('spinner-size');

const baseStyle = defineStyle({
  width: [$size.reference],
  height: [$size.reference],
});

const sizes = {
  xs: defineStyle({
    [$size.variable]: 'sizes.xs',
  }),
  sm: defineStyle({
    [$size.variable]: 'sizes.sm',
  }),
  md: defineStyle({
    [$size.variable]: 'sizes.md',
  }),
  lg: defineStyle({
    [$size.variable]: 'sizes.lg',
  }),
};

const spinnerTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
});

export default spinnerTheme;
