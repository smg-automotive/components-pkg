import { StyleConfig } from '@chakra-ui/theme-tools';

import Input from './input';

const selectStyles: StyleConfig = {
  ...Input,
  baseStyle: {
    field: {
      ...Input.baseStyle.field,
    },
    icon: {
      right: 'md',
      _disabled: {
        color: 'gray.200',
      },
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
