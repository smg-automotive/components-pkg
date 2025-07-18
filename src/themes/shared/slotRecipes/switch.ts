import { defineSlotRecipe } from '@chakra-ui/react';

const checkmark = {
  content: '""',
  display: 'block',
  width: '25%',
  height: '45%',
  borderStyle: 'solid',
  borderWidth: '0 2px 2px 0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(45deg)',
  borderColor: 'gray.900',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

export const switchRecipe = defineSlotRecipe({
  slots: ['root', 'control', 'thumb', 'label'],
  className: 'chakra-switch',
  base: {
    root: {
      display: 'inline-flex',
      gap: 'sm',
      alignItems: 'center',
      position: 'relative',
      verticalAlign: 'middle',
      '--switch-diff': 'calc(var(--switch-width) - var(--switch-height))',
      '--switch-width': '2.5rem',
      '--switch-height': '1.25rem',
      '--switch-x': {
        base: 'var(--switch-diff)',
        _rtl: 'calc(var(--switch-diff) * -1)',
      },
    },
    control: {
      bg: 'gray.200',
      cursor: 'pointer',
      borderRadius: 'full',
      position: 'relative',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      _hover: {
        bg: 'gray.300',
      },
      _disabled: {
        opacity: '60',
        cursor: 'notAllowed',
      },
      _checked: {
        bg: 'gray.900',
        _hover: {
          bg: 'gray.700',
        },
      },
    },
    thumb: {
      width: 'xs',
      height: 'xs',
      bg: 'white',
      borderRadius: 'full',
      position: 'absolute',
      top: 'xxs',
      left: 'xxs',
      _checked: {
        transform: 'translateX(var(--switch-x))',
        _after: {
          ...checkmark,
          borderColor: 'gray.900',
        },
      },
    },
    label: {
      userSelect: 'none',
      fontSize: 'sm',
      _disabled: {
        opacity: '60',
      },
    },
  },
});
