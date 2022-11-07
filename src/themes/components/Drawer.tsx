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

const baseStyleDialog: SystemStyleFunction = () => {
  return {
    zIndex: 'modal',
    bg: 'white',
    color: 'inherit',
    boxShadow: 'xs',
    borderBottom: 'inset 1px',
    borderBottomColor: 'gray.200',
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
