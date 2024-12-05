import { calc, cssVar, mode } from '@chakra-ui/theme-tools';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/react';
import { switchAnatomy as parts } from '@chakra-ui/anatomy';

import { opacity } from '../shared/opacity';

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
      opacity: opacity[20],
      cursor: 'not-allowed',
    },
    _checked: {
      bg: checkedBg || defaultCheckedBg,
      _hover: {
        bg: 'gray.700',
      },
    },
    _hover: {
      bg: 'gray.300',
    },
  };
};

const computedStyleTrack: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  const bg = mode(`${c}.200`, `${c}.200`)(props);
  const checkedBg = mode(`${c}.900`, `${c}.900`)(props);

  return baseStyleTrack({ ...props, bg, checkedBg });
};

const checkmark = {
  content: '""',
  display: 'block',
  width: '25%',
  height: '45%',
  border: 'solid',
  borderWidth: '0 2px 2px 0',
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(45deg)',
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
    _after: {
      ...checkmark,
      borderColor: 'gray.900',
    },
    _hover: {
      _after: {
        ...checkmark,
        borderColor: 'gray.700',
      },
    },
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

const variants = {
  default: {},
};

const defaultProps = {
  variant: 'default',
  size: 'md',
  colorScheme: 'gray',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
