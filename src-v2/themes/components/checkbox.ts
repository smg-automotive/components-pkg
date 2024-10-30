import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';

import { fontWeights } from '../shared/fontWeights';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleControl = defineStyle({
  width: 'xs',
  height: 'xs',
  border: '1px',
  borderRadius: 'sm',
  borderColor: 'gray.400',
  _hover: {
    borderColor: 'gray.900',
    outline: '2px solid',
    outlineColor: 'blue.100',
  },
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'blue.300',
    borderColor: 'gray.900',
  },
  _checked: {
    borderColor: 'gray.900',
    backgroundColor: 'gray.900',
    color: 'white',
    _disabled: {
      backgroundColor: 'gray.400',
      color: 'white',
    },
  },
  _disabled: {
    borderColor: 'gray.400',
    color: 'gray.400',
    outline: 'none',
  },
  _invalid: {
    borderColor: 'red.500',
    _hover: {
      outline: 'none',
    },
  },
  _indeterminate: {
    borderColor: 'gray.900',
    backgroundColor: 'gray.900',
    color: 'white',
  },
});

const baseStyleContainer = defineStyle({
  _disabled: {
    cursor: 'not-allowed',
  },
});

const baseStyleIcon = defineStyle({
  padding: 'xs',
});

const baseStyleLabel = defineStyle({
  width: 'full',
  textStyle: 'body',
  fontWeight: {
    bold: fontWeights.bold,
    regular: fontWeights.regular,
  },
  color: 'gray.900',
  _disabled: {
    color: 'gray.500',
  },
});

const alignCenter = {
  container: {
    alignItems: 'center',
  },
};

const alignTop = {
  container: {
    alignItems: 'flex-start',
  },
  control: {
    marginTop: 'xs',
  },
};

const alignTopForSmallSize = {
  container: {
    alignItems: 'flex-start',
  },
  control: {
    marginTop: 'xxs',
  },
};

const baseStyle = definePartsStyle({
  control: baseStyleControl,
  container: baseStyleContainer,
  icon: baseStyleIcon,
  label: baseStyleLabel,
});

const variants = {
  alignTop: alignTop,
  alignCenter: alignCenter,
  alignTopForSmallSize: alignTopForSmallSize,
};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'alignCenter',
  },
});
