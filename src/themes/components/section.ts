import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const parts = ['title', 'text'];

const variants = {
  hero: {
    title: {
      textStyle: 'heading1',
    },
    text: {
      textStyle: 'body-large',
    },
  },
  regular: {
    title: {
      textStyle: 'heading2',
    },
    text: {
      textStyle: 'body',
    },
  },
};

const defaultProps = {
  variant: 'hero',
};

const Section: ComponentMultiStyleConfig = {
  parts,
  baseStyle: {
    title: { color: 'gray.900' },
    text: { color: 'gray.900' },
  },
  variants,
  defaultProps,
};

export default Section;
