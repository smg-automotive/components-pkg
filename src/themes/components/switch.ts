import { calc, cssVar, mode } from '@chakra-ui/theme-tools';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/styled-system';
import { switchAnatomy as parts } from '@chakra-ui/anatomy';

// eslint-disable-next-line import/no-internal-modules
import { colors as ms24Colors } from '../ms24/colors';
// eslint-disable-next-line import/no-internal-modules
import { colors as as24Colors } from '../as24/colors';

const $width = cssVar('switch-track-width');
const $height = cssVar('switch-track-height');

const $diff = cssVar('switch-track-diff');
const diffValue = calc.subtract($width, $height);

const $translateX = cssVar('switch-thumb-x');

const baseStyleTrack: SystemStyleFunction = ({ bg, checkedBg }) => {
  const defaultBg = 'white';
  const defaultCheckedBg = 'blue';

  return {
    borderRadius: 'max',
    p: '2px',
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: 'common',
    transitionDuration: 'fast',
    bg: bg || defaultBg,
    _focusVisible: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _checked: {
      bg: checkedBg || defaultCheckedBg,
    },
  };
};

const computedStyleTrack: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  const bg = mode('gray.300', 'white')(props);
  const checkedBg = mode(`${c}.500`, `${c}.200`)(props);

  return baseStyleTrack({ ...props, bg, checkedBg });
};

const baseStyleThumb: SystemStyleObject = {
  bg: 'white',
  transitionProperty: 'transform',
  transitionDuration: 'normal',
  borderRadius: 'inherit',
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`,
  },
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc($diff).negate().toString(),
    },
  },
  track: computedStyleTrack(props),
  thumb: baseStyleThumb,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  md: {
    container: {
      [$width.variable]: '1.875rem',
      [$height.variable]: '1rem',
    },
  },
};

const themeSwitchStyles: PartsStyleFunction<typeof parts> = (props) => {
  return {
    track: baseStyleTrack({
      ...props,
      bg: as24Colors.brand.primary,
      checkedBg: ms24Colors.brand.primary,
    }),
    thumb: {
      ...baseStyleThumb,
      bg: 'gray.600',
      _checked: { bg: 'white' },
    },
  };
};

const variants = {
  default: {},
  themeSwitch: themeSwitchStyles,
};

const defaultProps = {
  variant: 'default',
  size: 'md',
  colorScheme: 'blue',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
