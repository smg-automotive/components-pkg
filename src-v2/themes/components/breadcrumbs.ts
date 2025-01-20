import { ComponentMultiStyleConfig } from '@chakra-ui/react';

import { linkBaseStyle } from './link';

const Breadcrumbs: ComponentMultiStyleConfig = {
  parts: ['link', 'container', 'separator'],
  baseStyle: {
    link: linkBaseStyle,
    separator: {
      color: 'gray.600',
    },
    container: {
      color: 'gray.900',
    },
  },
};

export default Breadcrumbs;
