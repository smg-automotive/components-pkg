import { ComponentStyleConfig } from '@chakra-ui/react';

const SimpleTitleHeading: ComponentStyleConfig = {
  parts: ['title'],
  baseStyle: {
    title: {
      color: 'gray.900',
      textStyle: { xs: 'heading3', lg: 'heading1' },
    },
  },
};

export default SimpleTitleHeading;
