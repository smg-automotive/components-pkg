import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { menuAnatomy as parts } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleList = defineStyle({
  bg: 'white',
  boxShadow: 'sm',
  color: 'inherit',
  minW: '3xs',
  py: '2',
  zIndex: 1,
  borderRadius: 'sm',
  borderWidth: '1px',
  borderColor: 'gray.200',
});

const baseStyleItem = defineStyle({
  paddingY: 'md',
  paddingX: 'lg',
  transitionProperty: 'background',
  transitionDuration: 'ultra-fast',
  transitionTimingFunction: 'ease-in',
  _focus: {
    bg: 'gray.100',
  },
  _active: {
    bg: 'blue.100',
  },
  _expanded: {
    bg: 'gray.100',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
});

const baseStyle = definePartsStyle({
  list: baseStyleList,
  item: baseStyleItem,
});

export default defineMultiStyleConfig({
  baseStyle,
});
