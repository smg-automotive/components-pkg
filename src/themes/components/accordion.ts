import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { accordionAnatomy as parts } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const variantLight = defineStyle({
  button: {
    _hover: {
      bg: 'gray.50',
    },
  },
  container: {
    color: 'gray.900',
    borderColor: 'gray.200',
    _last: {
      borderColor: 'gray.200',
    },
  },
});

const variantDark = defineStyle({
  button: {
    textStyle: 'heading5',
    _hover: {
      bg: 'gray.700',
    },
  },
  container: {
    color: 'white',
    bg: 'gray.900',
    borderColor: 'gray.700',
    _last: {
      borderColor: 'gray.700',
    },
  },
  panel: {
    textStyle: 'body-small',
  },
});

const titleOnDesktop = {
  textStyle: 'heading4',
  p: 'md',
};

const baseStyle = defineStyle({
  container: {
    borderTop: '1px',
    _last: {
      borderBottom: '1px',
    },
  },
  button: {
    textStyle: 'heading4',
    paddingX: 'lg',
    paddingY: 'md',
  },
  panel: {
    pb: 'md',
    paddingX: 'lg',
  },
  icon: {
    fontSize: 'xl',
  },
  titleOnDesktop,
});

const variants = {
  light: variantLight,
  dark: variantDark,
};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'light',
  },
});
