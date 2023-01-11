import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

export const linkBaseStyle: SystemStyleObject = {
  textStyle: 'body',
  color: 'blue.700',
  display: 'inline-flex',
  flexDirection: 'row',
  _hover: {
    cursor: 'pointer',
    color: 'blue.900',
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
