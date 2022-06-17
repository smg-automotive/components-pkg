import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

import { shared } from '../shared';

const { typography } = shared;

const linkBaseStyle: SystemStyleObject = {
  ...typography.body,
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
