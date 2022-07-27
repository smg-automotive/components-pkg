import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const title: SystemStyleObject = {
  textStyle: 'heading3',
  color: 'blue.700',
};
const image: SystemStyleObject = {};
const text: SystemStyleObject = {
  textStyle: 'base',
};

const ArticleTeaser: ComponentMultiStyleConfig = {
  parts: ['image', 'title', 'text'],
  baseStyle: {
    image,
    title,
    text,
  },
};

export default ArticleTeaser;
