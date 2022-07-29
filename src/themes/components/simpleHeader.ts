import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const baseStyleHeader: SystemStyleObject = {
  color: 'gray.900',
};

const SimpleHeader: ComponentMultiStyleConfig = {
  parts: ['header', 'title'],
  baseStyle: {
    header: baseStyleHeader,
    title: {
      textStyle: { base: 'heading3', lg: 'heading1' },
      wordBreak: 'break-all',
    },
  },
};

export default SimpleHeader;
