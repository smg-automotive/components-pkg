import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

import { fontSizes, lineHeights } from '../shared';

const linkBaseStyle: SystemStyleObject = {
  lineHeight: lineHeights.display,
  fontSize: fontSizes.base,
  color: 'blue.700',
  display: 'flex',
  alignItems: 'center',
  gap: 'xs',
  _hover: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  _active: {
    textDecoration: 'none',
    color: 'gray.900',
  },
  _disabled: {
    color: 'gray.300',
  },
};

const iconBaseStyle = {
  width: '1.5rem',
  height: '1.5rem',
};

const Link: ComponentMultiStyleConfig = {
  parts: ['leftIcon', 'rightIcon', 'link'],
  baseStyle: {
    link: linkBaseStyle,
    leftIcon: iconBaseStyle,
    rightIcon: iconBaseStyle,
  },
};

export default Link;
