/* eslint-disable @typescript-eslint/naming-convention */
import { cssVar, mode } from '@chakra-ui/theme-tools';
import { PartsStyleFunction, PartsStyleObject } from '@chakra-ui/styled-system';
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
    marginEnd: 'lg',
    w: 'sm',
    h: 'sm',
  },
};

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c } = props;
  const bg = mode(`${c}.100`, `${c}.200`)(props);
  const fg = mode(`${c}.500`, `${c}.200`)(props);
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
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  defaultProps,
};
