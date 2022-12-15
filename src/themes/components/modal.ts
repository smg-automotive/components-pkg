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

const baseStyleDialogContainer = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;

  return {
    display: 'flex',
    zIndex: 'modal',
    justifyContent: 'center',
    alignItems: isCentered ? 'center' : 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto',
    overscrollBehaviorY: 'none',
  };
});

const baseStyleDialog = defineStyle((props) => {
  const { scrollBehavior } = props;

  return {
    borderRadius: 'sm',
    bg: mode('white', 'gray.700')(props),
    color: 'inherit',
    my: '16',
    zIndex: 'modal',
    maxH: scrollBehavior === 'inside' ? 'calc(100% - 7.5rem)' : undefined,
    boxShadow: mode('lg', 'dark-lg')(props),
  };
});

const baseStyleHeader = defineStyle({
  px: '16',
  py: '20',
  fontSize: 'md',
  display: 'flex',
  fontWeight: 'semibold',
  position: 'relative',
});

const baseStyleCloseButton = defineStyle({
  position: 'absolute',
  top: '26',
  right: '19',
  width: '18px',
  height: '18px',
});

const baseStyleBody = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: '25px',
    py: '26px',
    flex: '1',
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
  };
});

const baseStyleFooter = defineStyle({
  px: '12',
  py: '16',
});

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer(props),
  dialog: baseStyleDialog(props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody(props),
  footer: baseStyleFooter,
}));

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
  lg: getSize('7xl'),
  full: getSize('full'),
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: 'lg' },
});
