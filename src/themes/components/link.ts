import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

import { shared } from '../shared';

const { textStyles } = shared;

const linkBaseStyle: SystemStyleObject = {
  ...textStyles.body,
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
