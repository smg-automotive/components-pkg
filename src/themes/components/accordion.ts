import { SystemStyleObject } from '@chakra-ui/styled-system';
import { accordionAnatomy as parts } from '@chakra-ui/anatomy';

const variantLight: Record<string, SystemStyleObject> = {
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
};

const variantDark: Record<string, SystemStyleObject> = {
  button: {
    _hover: {
      bg: 'black',
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
};

const titleOnDesktop = {
  textStyle: 'heading4',
  p: 'md',
};

const baseStyle: Record<string, SystemStyleObject> = {
  container: {
    borderTop: '1px',
    _last: {
      borderBottom: '1px',
    },
  },
  button: {
    textStyle: 'heading4',
    p: 'md',
  },
  panel: {
    pb: 'md',
    paddingX: 'md',
  },
  icon: {
    fontSize: 'lg',
  },
  titleOnDesktop,
};

const variants = {
  light: variantLight,
  dark: variantDark,
};

const defaultProps = {
  variant: 'light',
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  defaultProps,
};
