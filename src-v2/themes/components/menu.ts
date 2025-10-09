import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';
import { menuAnatomy as parts } from '@chakra-ui/anatomy';

import { opacity } from '../shared/opacity';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const maximumScrollbarWidth = 20;

const baseStyleList = defineStyle({
  bg: 'white',
  boxShadow: 'sm',
  color: 'inherit',
  minW: '3xs',
  maxW: `calc(100vw - ${maximumScrollbarWidth}px)`,
  py: '2',
  zIndex: 'dropdown',
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
    opacity: opacity[40],
    cursor: 'not-allowed',
  },
});

const baseStyle = definePartsStyle({
  list: baseStyleList,
  item: baseStyleItem,
});

export default defineMultiStyleConfig({
  baseStyle,
}) as ComponentStyleConfig;
