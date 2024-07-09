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
    },
  },

  variants: {
    highlight: {
      mark: {
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
      },
    },
    underline: {
      mark: {
        top: '1.15em',
        left: '0.125ch',
        right: '0.125ch',
        height: '11px',
      },
    },
  },
};

export default MarkedText;
