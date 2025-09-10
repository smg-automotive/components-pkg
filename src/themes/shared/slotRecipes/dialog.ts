import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

import { sizes } from '../tokens/sizes';

type ContainerSize = Exclude<keyof typeof sizes, 0 | 'container'>;

const baseStyleOverlay = defineStyle({
  bg: 'black',
  zIndex: 'modal',
  opacity: '40',
  w: 'full',
  h: 'full',
  pos: 'fixed',
  left: '0',
  top: '0',
});

const baseStyleDialogContainer = defineStyle({
  display: 'flex',
  width: 'full',
  height: 'full',
  position: 'fixed',
  left: '0',
  top: '0',
  zIndex: 'modal',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  overscrollBehaviorY: 'none',
});

const baseStyleDialog = defineStyle({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  outline: '0',
  width: 'full',
  borderRadius: 'sm',
  bg: { base: 'white', _dark: 'gray.700' },
  color: 'inherit',
  my: 'lg',
  zIndex: 'modal',
  boxShadow: 'lg',
  _open: {
    animationName: 'fade-in',
    animationDuration: 'normal',
  },
  _closed: {
    animationName: 'fade-out',
    animationDuration: 'normal',
  },
});

const baseStyleHeader = defineStyle({
  px: 'lg',
  py: 'xl',
  display: 'flex',
  gap: 'sm',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  position: 'relative',
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

const baseStyleCloseButton = defineStyle({
  width: 'sm',
  height: 'sm',
  _hover: { bg: 'gray.100' },
});

const sizeContent = (w: ContainerSize) =>
  w === 'full'
    ? defineStyle({
        maxW: { base: 'full', sm: 'full' },
        minH: { base: 'full', sm: 'full' },
        my: '0',
        borderRadius: 'none',
      })
    : defineStyle({
        maxW: { base: 'full', sm: w },
        minH: { base: 'full', sm: 'auto' },
        my: { base: '0', sm: 'lg' },
        borderRadius: { base: 'none', sm: 'sm' },
      });

const slots = [
  'header',
  'body',
  'footer',
  'backdrop',
  'content',
  'positioner',
  'closeTrigger',
] as const;

export const dialogRecipe = defineSlotRecipe({
  slots,
  className: 'chakra-dialog',
  base: {
    positioner: baseStyleDialogContainer,
    backdrop: baseStyleOverlay,
    content: baseStyleDialog,
    header: baseStyleHeader,
    body: baseStyleBody,
    footer: baseStyleFooter,
    closeTrigger: baseStyleCloseButton,
  },

  variants: {
    overlayColor: {
      gray: { backdrop: { bg: 'gray.100', opacity: '100' } },
    },

    scrollBehavior: {
      outside: {
        positioner: {
          overflow: 'auto',
          pointerEvents: 'auto',
        },
      },
    },

    size: {
      md: { content: sizeContent('7xl') },
      lg: { content: sizeContent('8xl') },
      auth0: { content: sizeContent('auth0-width') },
      full: { content: sizeContent('full') },
    },

    motionPreset: {
      scale: {
        content: {
          _open: {
            animationStyle: 'scale-fade-in',
            animationDuration: 'normal',
          },
          _closed: {
            animationStyle: 'scale-fade-out',
            animationDuration: 'normal',
          },
        },
      },
      none: {},
    },

    variant: {
      fullScreen: {
        backdrop: {
          bg: 'black',
          zIndex: 'modal',
          width: 'full',
        },
        positioner: {
          width: 'full',
          color: 'white',
          zIndex: 'fullScreenModal',
        },
        header: baseStyleHeader,
        closeTrigger: { _hover: { bg: 'none' } },
        body: {
          p: '0',
          flex: '1',
        },
        footer: baseStyleFooter,
        content: {
          maxW: 'full',
          minH: 'full',
          bg: 'black',
          my: '0',
        },
      },
      topScroll: {
        positioner: {
          ...baseStyleDialogContainer,
          ...defineStyle({ paddingTop: { base: '0', sm: '5xl' } }),
          alignItems: 'flex-start',
          overflow: 'auto',
        },
      },
    },
  },
});
