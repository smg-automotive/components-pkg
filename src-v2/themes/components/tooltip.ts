import { cssVar } from '@chakra-ui/theme-tools';
import {
  ComponentStyleConfig,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';

const $bg = cssVar('tooltip-bg');
const $arrowBg = cssVar('popper-arrow-bg');

const baseStyle = defineStyle(() => {
  return {
    bg: $bg.reference,
    [$bg.variable]: 'colors.gray.900',
    [$arrowBg.variable]: $bg.reference,
    p: 'sm',
    color: 'white',
    textStyle: 'body',
    zIndex: 'tooltip',
  };
});

export default defineStyleConfig({
  baseStyle,
}) as ComponentStyleConfig;
