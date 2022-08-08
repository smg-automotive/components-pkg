import { StyleConfig } from '@chakra-ui/theme-tools';

import Input from './input';

const selectStyles: StyleConfig = {
  ...Input,
  baseStyle: {
    field: {
      ...Input.baseStyle.field,
    },
  },
  sizes: Input.sizes,
  variants: {
    outline: Input.variants.outline,
  },
  defaultProps: {
    variant: 'outline',
  },
};

export default selectStyles;
