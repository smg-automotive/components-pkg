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

const svgCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8"><path d="M3.389 7.834a.52.52 0 0 0 .722 0l5.743-5.742a.52.52 0 0 0 0-.723L9.15.666a.495.495 0 0 0-.703 0L3.76 5.354 1.553 3.166a.495.495 0 0 0-.703 0l-.704.703a.52.52 0 0 0 0 .723z"/></svg>`;
const svgCheckHovered = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8"><path fill="#5D5D5D" d="M3.389 7.834a.52.52 0 0 0 .722 0l5.743-5.742a.52.52 0 0 0 0-.723L9.15.666a.495.495 0 0 0-.703 0L3.76 5.354 1.553 3.166a.495.495 0 0 0-.703 0l-.704.703a.52.52 0 0 0 0 .723z"/></svg>`;
const encodedSvg = window.btoa(svgCheck);
const encodedSvgHovered = window.btoa(svgCheckHovered);

const baseStyleThumb: SystemStyleObject = {
  bg: 'white',
  transitionProperty: 'transform',
  transitionDuration: 'normal',
  borderRadius: 'inherit',
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`,
    '::after': {
      content: `""`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '10px',
      height: '7.46px',
      background: `url("data:image/svg+xml;base64,${encodedSvg}") center / cover no-repeat`,
    },
    _hover: {
      '::after': {
        background: `url("data:image/svg+xml;base64,${encodedSvgHovered}") center / cover no-repeat`,
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
