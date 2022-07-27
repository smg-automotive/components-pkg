import {
  calc,
  cssVar,
  mode,
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools';

import type { SystemStyleObject } from '@chakra-ui/styled-system';
import { switchAnatomy as parts } from '@chakra-ui/anatomy';

const $width = cssVar('switch-track-width');
const $height = cssVar('switch-track-height');

const $diff = cssVar('switch-track-diff');
const diffValue = calc.subtract($width, $height);

const $translateX = cssVar('switch-thumb-x');

console.log('$width', $width);
console.log('$height', $height);
console.log('$diff', $diff);
console.log('$translateX', $translateX);
console.log('$diffValue', diffValue);

const baseStyleTrack: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  console.log('inside $width', $width);
  console.log('inside $props', props);
  console.log('inside $width', mode('gray.300', 'red.400')(props));
  console.log('insideconfig', {
    borderRadius: 'max',
    p: '2px',
    width: [$width.reference],
    height: [$height.reference],
    // transitionProperty: 'common',
    // transitionDuration: 'fast',
    bg: mode('gray.300', 'red.400')(props),
    _focusVisible: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
    },
  });

  return {
    borderRadius: 'max',
    p: '2px',
    width: [$width.reference],
    height: [$height.reference],
    // transitionProperty: 'common',
    // transitionDuration: 'fast',
    bg: mode('gray.300', 'red.400')(props),
    _focusVisible: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
    },
  };
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
  track: baseStyleTrack(props),
  thumb: baseStyleThumb,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    container: {
      [$width.variable]: '1.375rem',
      [$height.variable]: '0.75rem',
    },
  },
  md: {
    container: {
      [$width.variable]: '1.875rem',
      [$height.variable]: '1rem',
    },
  },
  lg: {
    container: {
      [$width.variable]: '2.875rem',
      [$height.variable]: '1.5rem',
    },
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'red',
};

console.log({
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
});

console.log('digferences??', baseStyle(defaultProps));

export default {
  parts: parts.keys,
  baseStyle: baseStyle,
  // baseStyle: baseStyle(defaultProps), // like that it works fine
  sizes,
  defaultProps,
};
