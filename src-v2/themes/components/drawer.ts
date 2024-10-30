import {
  createMultiStyleConfigHelpers,
  PartsStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/react';
import { drawerAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const getSize = (value: string) => {
  if (value === 'full') {
    return definePartsStyle({
      dialog: { maxW: '100vw', h: '100vh' },
    });
  }
  return definePartsStyle({
    dialog: { maxW: value },
  });
};

const baseStyleOverlay: SystemStyleObject = {
  zIndex: 'overlay',
};

const baseStyleDialogContainer: SystemStyleObject = {
  display: 'flex',
  zIndex: 'modal',
  justifyContent: 'center',
};

const baseStyleDialog = () => {
  return {
    zIndex: 'modal',
    bg: 'white',
    color: 'inherit',
    boxShadow: 'xs',
    borderBottom: '1px',
    borderBottomColor: 'gray.200',
  };
};

const baseStyleBody: SystemStyleObject = {
  flex: 1,
  overflow: 'auto',
};

const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: baseStyleDialog(),
  body: baseStyleBody,
});

const sizes = {
  xl: getSize('4xl'),
  half: getSize('50vw'),
  full: getSize('full'),
};

export default {
  baseStyle,
  parts: parts.keys,
  sizes,
  defaultProps: {
    size: 'xl',
  },
};
