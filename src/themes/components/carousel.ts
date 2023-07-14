import { ComponentStyleConfig } from '@chakra-ui/react';

import { hexToRgb } from 'src/lib/hexToRgb';

import { opacity } from '../shared/opacity';
import { colors } from '../shared/colors';

const [r, g, b] = hexToRgb(colors.gray[900]);

const parts = [
  'container',
  'carousel',
  'slide',
  'slideContainer',
  'buttonContainer',
  'button',
  'icon',
  'pagination',
  'paginationButton',
  'paginationIconContainer',
];

const fullScreen = {
  container: {
    backgroundColor: 'black',
    position: {
      base: 'fixed',
      md: 'static',
    },
  },
  carousel: {
    paddingX: {
      md: '5xl',
    },
  },
  pagination: {
    overflow: 'hidden',
    position: 'relative',
    paddingX: {
      base: 'md',
      md: '5xl',
    },
    height: '7.5rem',
  },
  paginationButton: {
    position: 'absolute',
    top: '0',
    width: 'lg',
    height: 'full',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  paginationIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'md',
    height: 'md',
    borderRadius: 'sm',
    backgroundColor: `rgba(${r},${g},${b},0.8)`,
  },
  buttonContainer: {
    backgroundColor: 'black',
    width: 'xl',
    visibility: {
      base: 'hidden',
      md: 'visible',
    },
  },
  slide: {
    height: 'full',
  },
  button: {
    opacity: opacity[100],
    backgroundColor: 'black',
  },
  icon: {
    boxSize: 'md',
  },
};

const numbersPaginationButton = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  textAlign: 'center',
  minWidth: 'md',
  height: 'md',
  borderRadius: 'sm',
  _hover: {
    backgroundColor: 'gray.100',
  },
};

const dotsPaginationWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'xs',
  _last: {
    '> span': {
      width: '4px',
      height: '4px',
      _after: {
        width: '100%',
        height: '4px',
        content: '""',
      },
      _active: {
        width: '8px',
        height: '8px',
        _after: {
          backgroundColor: 'white',
          borderRadius: 'full',
          opacity: opacity[100],
          width: '100%',
          height: '8px',
          content: '""',
        },
      },
    },
  },
  _hover: {
    '> span': {
      _after: {
        opacity: opacity[80],
      },
    },
  },
};

const dotsPaginationButton = {
  backgroundColor: 'transparent',
  touchAction: 'manipulation',
  display: 'inline-flex',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 0,
  padding: 0,
  width: '6px',
  height: '6px',
  marginX: 'xs',
  _after: {
    backgroundColor: 'gray.300',
    opacity: opacity[40],
    borderRadius: 'full',
    width: '100%',
    height: '6px',
    content: '""',
  },
};

const dotsPaginationButtonActive = {
  ...dotsPaginationButton,
  // eslint-disable-next-line sonarjs/no-duplicate-string
  width: '8px !important',
  height: '8px !important',
  _after: {
    backgroundColor: 'white',
    borderRadius: 'full',
    opacity: opacity[100],
    width: '100%',
    height: '8px !important',
    content: '""',
  },
};

const Carousel: ComponentStyleConfig = {
  parts,
  baseStyle: {
    container: {
      height: 'full',
      width: 'full',
    },
    carousel: {
      overflow: 'hidden',
      position: 'relative',
    },
    slide: {
      flexGrow: '0',
      flexShrink: '0',
      flexBasis: 'full',
    },
    slideContainer: {
      height: 'full',
      alignItems: 'center',
      display: 'flex',
    },
    buttonContainer: {
      position: 'absolute',
      top: '0',
      width: 'lg',
      height: 'full',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      visibility: 'hidden',
      _groupHover: { md: { visibility: 'visible' } },
      _focus: {
        outline: 'none',
      },
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'md',
      height: 'md',
      borderRadius: 'sm',
      backgroundColor: `rgba(${r},${g},${b},0.4)`,
      color: 'white',
      _hover: { backgroundColor: `rgba(${r},${g},${b},0.8)` },
    },
    icon: {
      boxSize: 'sm',
    },
    numbersPaginationButton,
    numbersPaginationButtonActive: {
      ...numbersPaginationButton,
      color: 'white',
      backgroundColor: 'gray.900',
      _hover: {
        backgroundColor: 'gray.900',
      },
    },
    dotsPaginationContainer: {
      position: 'absolute',
      width: 'full',
      bottom: '23%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dotsPaginationWrapper,
    dotsPaginationButton,
    dotsPaginationButtonActive,
  },
  variants: {
    fullScreen,
  },
};

export default Carousel;
