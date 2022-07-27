import { ComponentStyleConfig } from '@chakra-ui/react';

const SimpleHeading: ComponentStyleConfig = {
  parts: ['title'],
  baseStyle: {
    title: {
      color: 'gray.900',
      textStyle: { xs: 'heading3', lg: 'heading1' },
    },
  },
};

export default SimpleHeading;
