/* eslint-disable @typescript-eslint/naming-convention */
import { cssVar, mode } from '@chakra-ui/theme-tools';
import {
  PartsStyleFunction,
  PartsStyleObject,
  StyleFunctionProps,
} from '@chakra-ui/styled-system';
import { alertAnatomy as parts } from '@chakra-ui/anatomy';

const $fg = cssVar('alert-fg');
const $bg = cssVar('alert-bg');

const baseStyle: PartsStyleObject<typeof parts> = {
  container: {
    bg: $bg.reference,
    px: '4',
    py: '3',
  },
  title: {
    textStyle: 'heading1',
  },
  description: {
    lineHeight: '6',
  },
  icon: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: '3',
    w: '5',
    h: '6',
  },
  spinner: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: '3',
    w: '5',
    h: '5',
  },
};

function getBg(props: StyleFunctionProps): string {
  const { colorScheme: c } = props;
  const lightBg = `${c}.100`;
  const darkBg = `${c}.200`;
  return mode(lightBg, darkBg)(props);
}

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c } = props;
  const fg = mode(`${c}.500`, `${c}.200`)(props);
  return {
    container: {
      [$bg.variable]: getBg(props),
      [$fg.variable]: `colors.${fg}`,
      paddingStart: '3',
      borderStartWidth: '4px',
      borderStartColor: $fg.reference,
    },
  };
};

const variants = {
  'left-accent': variantLeftAccent,
};

const defaultProps = {
  variant: 'left-accent',
  colorScheme: 'blue.100',
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  defaultProps,
};
