import { cssVar, mode } from '@chakra-ui/theme-tools';
import {
  ComponentStyleConfig,
  PartsStyleFunction,
  PartsStyleObject,
} from '@chakra-ui/react';
import { alertAnatomy as parts } from '@chakra-ui/anatomy';

const $fg = cssVar('alert-fg');
const $bg = cssVar('alert-bg');

const baseStyle: PartsStyleObject<typeof parts> = {
  container: {
    bg: $bg.reference,
    padding: 'lg',
  },
  title: {
    textStyle: 'heading4',
  },
  description: {
    textStyle: 'body',
  },
  icon: {
    color: $fg.reference,
    flexShrink: 0,
    alignSelf: 'start',
    marginEnd: 'lg',
    w: 'sm',
    h: 'sm',
  },
};

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c } = props;
  const bg = mode(`${c}.100`, `${c}.200`)(props);
  const fg = mode(
    props.status === 'info' ? `${c}.700` : `${c}.500`,
    `${c}.200`,
  )(props);
  return {
    container: {
      [$bg.variable]: `colors.${bg}`,
      [$fg.variable]: `colors.${fg}`,
      paddingStart: 'lg',
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
  colorScheme: 'blue',
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  defaultProps,
} as ComponentStyleConfig;
