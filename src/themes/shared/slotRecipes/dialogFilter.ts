import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

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

const slots = [
  'header',
  'body',
  'footer',
  'backdrop',
  'content',
  'positioner',
  'closeTrigger',
] as const;

export const dialogFilterRecipe = defineSlotRecipe({
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
});
