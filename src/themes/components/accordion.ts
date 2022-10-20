import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { accordionAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleContainer = defineStyle({
  color: 'gray.900',
  borderTop: '1px',
  borderColor: 'gray.200',
  _last: {
    borderBottom: '1px',
    borderColor: 'gray.200',
  },
});

const baseStyleButton = defineStyle({
  transitionProperty: 'common',
  transitionDuration: 'normal',
  textStyle: 'heading4',
  p: 'md',
  _hover: {
    bg: 'gray.50',
  },
});

const baseStylePanel = defineStyle({
  textStyle: 'body',
  p: 'sm',
});

const baseStyleIcon = defineStyle({
  fontSize: 'lg',
});

const baseStyle = definePartsStyle({
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon,
});

export default defineMultiStyleConfig({ baseStyle });
