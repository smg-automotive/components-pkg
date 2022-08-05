import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const title: SystemStyleObject = {
  textStyle: 'heading3',
  color: 'blue.700',
};
const text: SystemStyleObject = {
  textStyle: 'body',
  color: 'gray.900',
};

const ArticleTeaser: ComponentMultiStyleConfig = {
  parts: ['title', 'text'],
  baseStyle: {
    title,
    text,
  },
};

export default ArticleTeaser;
