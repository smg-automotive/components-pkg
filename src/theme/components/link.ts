import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

import { fontSizes, lineHeights } from '../shared';

const linkBaseStyle: SystemStyleObject = {
  lineHeight: lineHeights.display,
  fontSize: fontSizes.base,
};

const enabledBaseStyle: SystemStyleObject = {
  color: 'blue.700',
  _hover: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  _active: {
    textDecoration: 'none',
    color: 'gray.900',
  },
};

const disabledBaseStyle = {
  color: 'gray.300',
  _hover: {
    cursor: 'default',
    textDecoration: 'none',
  },
};

const iconBaseStyle = {
  width: '1.5rem',
  height: '1.5rem',
};

const Link: ComponentMultiStyleConfig = {
  parts: ['leftIcon', 'rightIcon', 'link', 'disabled'],
  baseStyle: {
    link: { ...linkBaseStyle, ...enabledBaseStyle },
    disabled: { ...linkBaseStyle, ...disabledBaseStyle },
    leftIcon: { ...iconBaseStyle, mr: 'xs' },
    rightIcon: { ...iconBaseStyle, ml: 'xs' },
  },
};

export default Link;
