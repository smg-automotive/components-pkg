import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { accordionAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const variantLight = definePartsStyle({
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
  panel: {
    textStyle: 'body',
  },
});

const variantDark = definePartsStyle({
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
  titleOnDesktop: {
    textStyle: 'heading5',
  },
});

const variantMinimal = definePartsStyle({
  button: {
    textStyle: 'body',
    paddingX: 0,
    maxWidth: 'fit-content',

    '& > svg': {
      marginLeft: 'sm',
    },
  },
  container: {
    borderTop: 0,
    _last: {
      borderBottom: 0,
    },
  },
  panel: {
    pb: 'md',
    paddingX: '3xl',
    textStyle: 'body',
  },
});

const baseStyle = definePartsStyle({
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
  titleOnDesktop: {
    textStyle: 'heading5',
    paddingX: 'lg',
    paddingY: 'md',
  },
  panelOnDesktop: {
    textStyle: 'body-small',
    pb: 'md',
    paddingX: 'lg',
  },
});

const variants = {
  light: variantLight,
  dark: variantDark,
  minimal: variantMinimal,
};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'light',
  },
});
