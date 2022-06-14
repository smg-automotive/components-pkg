import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

import { fontSizes } from '../shared';

const linkBaseStyle: SystemStyleObject = {
  fontSize: fontSizes.base,
  color: 'blue.700',
  verticalAlign: 'middle',
  _hover: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  _active: {
    textDecoration: 'none',
    color: 'gray.900',
  },
};

const Link: ComponentMultiStyleConfig = {
  parts: ['link', 'leftIcon', 'rightIcon'],
  baseStyle: {
    link: linkBaseStyle,
    leftIcon: { ml: 'xs' },
    rightIcon: { mr: 'xs' },
  },
};

export default Link;
