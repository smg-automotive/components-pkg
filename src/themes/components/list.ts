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

const mdVariant = {
  container: {
    textStyle: 'body',
  },
};

const smVariant = {
  container: {
    textStyle: 'body-small',
  },
};

const variants = {
  md: mdVariant,
  sm: smVariant,
};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'md',
  },
}) as ComponentStyleConfig;
