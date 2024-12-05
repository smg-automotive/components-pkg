import { ComponentStyleConfig } from '@chakra-ui/react';

const MarkedText: ComponentStyleConfig = {
  parts: ['container', 'text', 'mark'],

  baseStyle: {
    container: {
      position: 'relative',
      width: 'max-content',
      display: 'inline-flex',
      alignItems: 'center',
    },
    text: {
      position: 'relative',
      width: '100%',
      backgroundColor: 'transparent',
    },
    mark: {
      position: 'absolute',
    },
  },

  variants: {
    highlight: {
      container: {
        px: 'sm',
      },
      mark: {
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
      },
    },
    underline: {
      text: {
        lineHeight: 1.5,
      },
      mark: {
        top: '1.25em',
        left: '-0.25ch',
        width: 'calc(100% + 0.5ch)',
        height: {
          md: '8px',
          base: '6px',
        },
      },
    },
  },
};

export default MarkedText;
