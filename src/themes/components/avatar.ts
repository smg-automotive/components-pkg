import { isDark, mode, randomColor } from '@chakra-ui/theme-tools';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
} from '@chakra-ui/styled-system';
import { avatarAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleBadge: SystemStyleFunction = (props) => {
  return {
    transform: 'translate(25%, 25%)',
    borderRadius: 'max', // TODO: does not seem to be taken form here
    border: '0.2em solid',
    borderColor: mode('white', 'gray.800')(props),
  };
};

const baseStyleExcessLabel: SystemStyleFunction = (props) => {
  return {
    bg: mode('gray.200', 'white')(props),
  };
};

const baseStyleContainer: SystemStyleFunction = (props) => {
  const { name, theme } = props;
  const bg = name ? randomColor({ string: name }) : 'gray.400';
  const isBgDark = isDark(bg)(theme);

  let color = 'white';
  if (!isBgDark) color = 'gray.800';

  const borderColor = mode('white', 'gray.800')(props);

  return {
    bg,
    color,
    borderColor,
    verticalAlign: 'top',
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  badge: baseStyleBadge(props),
  excessLabel: baseStyleExcessLabel(props),
  container: baseStyleContainer(props),
});

function getSize(size: string): PartsStyleObject<typeof parts> {
  return {
    container: {
      width: size,
      height: size,
      fontSize: `calc(${size} / 2.5)`,
    },
    excessLabel: {
      width: size,
      height: size,
    },
    label: {
      fontSize: `calc(${size} / 2.5)`,
      lineHeight: size,
    },
  };
}

const sizes = {
  md: getSize('40px'),
};

const defaultProps = {
  size: 'md',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
