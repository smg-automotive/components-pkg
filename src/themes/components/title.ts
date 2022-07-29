import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const parts = ['title', 'text'];

const variants = {
  page: {
    title: {
      textStyle: 'heading1',
    },
    text: {
      textStyle: 'body-large',
    },
  },
  section: {
    title: {
      textStyle: 'heading2',
    },
    text: {
      textStyle: 'body',
    },
  },
};

const defaultProps = {
  variant: 'page',
};

const Title: ComponentMultiStyleConfig = {
  parts,
  baseStyle: {
    title: { color: 'gray.900' },
    text: { color: 'gray.900' },
  },
  variants,
  defaultProps,
};

export default Title;
