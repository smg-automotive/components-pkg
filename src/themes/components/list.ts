import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

import { styleTypes as unorderedStyleTypes } from 'src/components/list/UnorderedList';

import { fontSizes } from '../shared/fontSizes';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleIcon = defineStyle({
  marginEnd: '2',
  display: 'inline',
  verticalAlign: 'text-bottom',
});

const baseStyle = definePartsStyle({
  icon: baseStyleIcon,
});

const sizes = {
  md: definePartsStyle({
    container: {
      textStyle: 'body',
    },
  }),
  sm: definePartsStyle({
    container: {
      textStyle: 'body-small',
    },
  }),
};

const variants = {
  'icon-inside': definePartsStyle(({ size, styleType }) => ({
    container: defineStyle({
      listStylePos: 'inside',
    }),
    item: defineStyle({
      _before: {
        content: '""',
        marginStart: unorderedStyleTypes.includes(styleType)
          ? `calc(-${fontSizes[size as keyof typeof fontSizes]} / 2)`
          : '',
      },
    }),
  })),
  'icon-outside': definePartsStyle(({ size }) => ({
    container: defineStyle({
      listStylePos: 'outside',
      marginStart: fontSizes[size as keyof typeof fontSizes],
    }),
  })),
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'icon-inside',
  },
}) as ComponentStyleConfig;
