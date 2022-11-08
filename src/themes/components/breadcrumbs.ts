import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const link: SystemStyleObject = {
  textStyle: 'body',
  color: 'blue.700',
  _hover: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

const Breadcrumbs: ComponentMultiStyleConfig = {
  parts: ['link'],
  baseStyle: {
    link,
  },
};

export default Breadcrumbs;
