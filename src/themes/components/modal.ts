import { mode } from '@chakra-ui/theme-tools';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { modalAnatomy as parts } from '@chakra-ui/anatomy';

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
  maxHeight: '65px',
});

const baseStyleCloseButton = defineStyle({
  width: '18px',
  height: '18px',
  fontSize: '18px',
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
  full: getSize('full'),
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: 'md' },
});
