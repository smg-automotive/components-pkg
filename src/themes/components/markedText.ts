import { ComponentStyleConfig } from '@chakra-ui/react';

const MarkedText: ComponentStyleConfig = {
  parts: ['container', 'text', 'mark'],

  baseStyle: {
    container: {
      position: 'relative',
      width: 'max-content',
      display: 'inline-flex',
      alignItems: 'center',
      px: 'sm',
    },
    text: {
      position: 'relative',
      width: '100%',
      backgroundColor: 'transparent',
    },
    mark: {
      position: 'absolute',
      width: '100%',
      left: '0',
    },
  },

  variants: {
    highlight: {
      mark: {
        top: '0',
        height: '100%',
      },
    },
    underline: {
      mark: {
        px: 'sm',
        top: '1.25em',
        height: {
          md: '8px',
          base: '6px',
        },
      },
    },
  },
};

export default MarkedText;
