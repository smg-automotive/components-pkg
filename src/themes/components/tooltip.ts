import { cssVar } from '@chakra-ui/theme-tools';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

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
  };
});

export default defineStyleConfig({
  baseStyle,
});
