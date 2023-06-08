import { PartsStyleObject, SystemStyleObject } from '@chakra-ui/react';
import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';

import { fontWeights } from '../shared/fontWeights';

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    label: { fontSize: 'sm' },
  },
  lg: {
    label: { fontSize: 'base' },
  },
};

const baseStyleControl: SystemStyleObject = {
  width: 'xs',
  height: 'xs',
  border: '1px',
  borderRadius: 'sm',
  borderColor: 'gray.400',
  _hover: {
    borderColor: 'gray.900',
  },
  _checked: {
    borderColor: 'gray.900',
  },
  _disabled: {
    borderColor: 'gray.400',
    color: 'gray.400',
  },
  _invalid: {
    borderColor: 'red.500',
  },
};

const baseStyleContainer: SystemStyleObject = {
  _disabled: {
    cursor: 'not-allowed',
  },
};

const baseStyleIcon: SystemStyleObject = {
  padding: 'xs',
};

const baseStyleLabel: SystemStyleObject = {
  width: 'full',
  textStyle: 'body',
  fontWeight: {
    bold: fontWeights.bold,
    regular: fontWeights.regular,
  },
  color: 'gray.900',
  _disabled: {
    color: 'gray.400',
  },
};

const allignCenter = {
  container: {
    alignItems: 'center',
  },
};

const allignTop = {
  container: {
    alignItems: 'flex-start',
  },
  label: {
    position: 'relative',
    top: '-5',
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  control: baseStyleControl,
  container: baseStyleContainer,
  icon: baseStyleIcon,
  label: baseStyleLabel,
};

const variants = {
  allignTop: allignTop,
  allignCenter: allignCenter,
};

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'allignCenter',
  },
};
