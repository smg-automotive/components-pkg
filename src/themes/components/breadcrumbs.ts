import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const text: SystemStyleObject = {
  textStyle: 'body',
  color: 'gray.900',
};

const separator: SystemStyleObject = {
  borderLeft: '2px',
  borderStyle: 'solid',
  borderColor: 'gray.500',
  height: 'xs',
  marginLeft: 'sm',
  marginRight: 'sm',
};

const Breadcrumbs: ComponentMultiStyleConfig = {
  parts: ['text', 'separator'],
  baseStyle: {
    text,
    separator,
  },
};

export default Breadcrumbs;
