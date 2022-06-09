import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

import { fontSizes, lineHeights } from '../shared';

const baseStyle: SystemStyleObject = {
  lineHeight: lineHeights.display,
  fontSize: fontSizes.base,
  color: 'blue.700',
  display: 'flex',
  alignItems: 'center',
  gap: 'xs',
  _hover: {
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

const Link: ComponentMultiStyleConfig = {
  parts: ['leftIcon', 'rightIcon', 'main'],
  baseStyle: {
    main: baseStyle,
    leftIcon: {
      width: '24px',
      height: '24px',
    },
    rightIcon: {
      width: '24px',
      height: '24px',
    },
  },
};

export default Link;
