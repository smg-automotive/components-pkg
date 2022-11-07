import { mode } from '@chakra-ui/theme-tools';
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/styled-system';
import { drawerAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleOverlay: SystemStyleObject = {
  zIndex: 'overlay',
};

const baseStyleDialogContainer: SystemStyleObject = {
  display: 'flex',
  zIndex: 'modal',
  justifyContent: 'center',
};

const baseStyleDialog: SystemStyleFunction = (props) => {
  const { isFullHeight } = props;

  return {
    ...(isFullHeight && { height: '100vh' }),
    zIndex: 'modal',
    maxH: '100vh',
    bg: mode('white', 'gray.700')(props),
    color: 'inherit',
    boxShadow: mode('lg', 'dark-lg')(props),
  };
};

const baseStyleBody: SystemStyleObject = {
  flex: 1,
  overflow: 'auto',
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: baseStyleDialog(props),
  body: baseStyleBody,
});

export default {
  baseStyle,
  parts: parts.keys,
};
