import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { radioAnatomy as parts } from '@chakra-ui/anatomy';

import Checkbox from './checkbox';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyleLabel = defineStyle({
  userSelect: 'none',
  _disabled: { opacity: 0.4 },
});

const baseStyleContainer = defineStyle({
  _disabled: { cursor: 'not-allowed' },
});

const isFunction = (value: any): value is Function =>
  typeof value === 'function';

export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

const baseStyleControl = defineStyle((props) => {
  const controlStyle = runIfFn(Checkbox.baseStyle, props)?.control;

  return {
    ...controlStyle,
    borderRadius: 'full',
    _checked: {
      ...controlStyle?.['_checked'],
      _before: {
        content: `""`,
        display: 'inline-block',
        pos: 'relative',
        w: '50%',
        h: '50%',
        borderRadius: '50%',
        bg: 'currentColor',
      },
    },
  };
});

const baseStyle = definePartsStyle((props) => ({
  label: baseStyleLabel,
  container: baseStyleContainer,
  control: baseStyleControl(props),
}));

export default {
  baseStyle,
};
