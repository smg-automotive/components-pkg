import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

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
  md: {
    container: {
      textStyle: 'body',
      spacing: 'md',
    },
  },
  sm: {
    container: {
      textStyle: 'body-small',
      spacing: 'sm',
    },
  },
};

const variants = {
  'icon-inside': {
    container: {
      stylePosition: 'inside',
    },
    'icon-outside': {
      container: {
        stylePosition: 'outside',
      },
    },
  },
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
