import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const baseStyleHeader: SystemStyleObject = {
  color: 'gray.900',
};

const SimpleHeader: ComponentMultiStyleConfig = {
  parts: ['header', 'title'],
  baseStyle: {
    header: baseStyleHeader,
    title: {
      textStyle: { '2xs': 'heading3', md: 'heading1' },
      wordBreak: 'break-word',
    },
  },
};

export default SimpleHeader;
