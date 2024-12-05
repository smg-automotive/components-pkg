import { StyleConfig } from '@chakra-ui/react';

import Input from './input';

const selectStyles: StyleConfig = {
  ...Input,
  baseStyle: {
    field: {
      ...Input.baseStyle.field,
      paddingInlineEnd: '3xl',
    },
    icon: {
      right: 'sm',
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
