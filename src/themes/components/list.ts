import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleIcon = defineStyle({
  marginEnd: '2',
  display: 'inline',
  verticalAlign: 'text-bottom',
});

const baseStyle = definePartsStyle({
  icon: baseStyleIcon,
});

export default defineMultiStyleConfig({
  baseStyle,
});
