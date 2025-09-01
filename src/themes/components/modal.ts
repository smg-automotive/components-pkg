import { mode } from '@chakra-ui/theme-tools';

import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';
import { modalAnatomy as parts } from '@chakra-ui/anatomy';

import { zIndices } from '../shared/zIndices';
import { opacity } from '../shared/opacity';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleOverlay = defineStyle({
  bg: 'black',
  zIndex: 'modal',
  opacity: `${opacity[40]} !important`,
});

const baseStyleDialogContainer = defineStyle({
  display: 'flex',
  zIndex: 'modal',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  overscrollBehaviorY: 'none',
});

const baseStyleDialog = defineStyle({
  borderRadius: 'sm',
  bg: mode('white', 'gray.700'),
  color: 'inherit',
  my: 'lg',
  zIndex: 'modal',
  boxShadow: mode('lg', 'dark-lg'),
});

const baseStyleHeader = defineStyle({
  px: 'lg',
  py: 'xl',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
});

const baseStyleCloseButton = defineStyle({
  width: 'sm',
  height: 'sm',
});

const baseStyleBody = defineStyle({
  p: '2xl',
  flex: '1',
});

const baseStyleFooter = defineStyle({
  px: 'lg',
  py: 'md',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const baseStyle = definePartsStyle({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: baseStyleDialog,
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter,
});

const variants = {
  base: baseStyle,
  topScroll: {
    ...baseStyle,
    dialogContainer: {
      ...baseStyle.dialogContainer,
      alignItems: 'flex-start',
      overflow: 'auto',
      paddingTop: defineStyle({
        base: '',
        sm: '5xl',
      }),
    },
  },
  fullScreen: {
    overlay: {
      bg: 'black',
      zIndex: 'modal',
      width: '100vw',
    },
    dialogContainer: {
      width: '100vw',
      color: 'white',
      zIndex: zIndices.fullScreenModal,
    },
    header: baseStyleHeader,
    closeButton: baseStyleCloseButton,
    body: {
      p: '0',
      flex: '1',
    },
    footer: baseStyleFooter,
    dialog: {
      maxW: '100vw',
      minH: '100vh',
      bg: 'black',
      my: '0',
      borderRadius: '0',
    },
  },
};

function getSize(value: string) {
  if (value === 'full') {
    return definePartsStyle({
      dialog: {
        maxW: '100vw',
        minH: '$100vh',
        my: '0',
        borderRadius: '0',
      },
    });
  }
  return definePartsStyle({
    dialog: { maxW: value },
  });
}

const sizes = {
  md: getSize('7xl'),
  lg: getSize('8xl'),
  auth0: getSize('auth0-width'),
  full: getSize('full'),
};

export default defineMultiStyleConfig({
  variants,
  sizes,
  defaultProps: { size: 'md', variant: 'base' },
}) as ComponentStyleConfig;
