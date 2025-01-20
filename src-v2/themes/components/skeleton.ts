import { getColor } from '@chakra-ui/theme-tools';
import {
  cssVar,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/styled-system';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

const baseStyle = defineStyle((props) => {
  const { startColor = 'gray.100', endColor = 'gray.400', theme } = props;

  const start = getColor(theme, startColor);
  const end = getColor(theme, endColor);

  return {
    [$startColor.variable]: start,
    [$endColor.variable]: end,
    opacity: 0.7,
    borderRadius: '2px',
    borderColor: start,
    background: end,
  };
});

const skeletonTheme = defineStyleConfig({
  baseStyle,
});

export default skeletonTheme;
