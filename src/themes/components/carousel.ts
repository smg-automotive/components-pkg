import { ComponentStyleConfig } from '@chakra-ui/react';
import { hexToRgb } from '../../lib/hexToRgb';
import { colors } from '../shared/colors';

const [r, g, b] = hexToRgb(colors.gray[900]);

const parts = [
  'container',
  'slide',
  'slideContainer',
  'buttonContainer',
  'button',
  'icon',
];

const fullScreen = {
  container: {
    height: '100%',
    paddingX: {
      md: '5xl',
    },
    backgroundColor: 'black',
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
    opacity: '100%',
    backgroundColor: 'black',
  },
  icon: {
    boxSize: 'md',
  },
};

const Carousel: ComponentStyleConfig = {
  parts,
  baseStyle: {
    container: {
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
  },
  variants: {
    fullScreen,
  },
};

export default Carousel;
