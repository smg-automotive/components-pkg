import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const separator: SystemStyleObject = {
  borderLeft: '2px',
  borderStyle: 'solid',
  borderColor: 'gray.500',
  height: 'xs',
  marginLeft: 'md',
  marginRight: 'md',
};

const link: SystemStyleObject = {
  textStyle: 'body',
  color: 'blue.700',
  _hover: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

const Breadcrumbs: ComponentMultiStyleConfig = {
  parts: ['text', 'separator'],
  baseStyle: {
    separator,
    link,
  },
};

export default Breadcrumbs;
