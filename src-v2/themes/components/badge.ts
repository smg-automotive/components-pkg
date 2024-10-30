import { ComponentStyleConfig, defineStyle } from '@chakra-ui/react';

const baseStyle = defineStyle(({ theme }) => {
  const color = theme.name === 'AutoScout 24' ? 'black' : 'white';

  return {
    paddingX: 'xs',
    paddingY: 'xxs',
    textTransform: 'uppercase',
    fontSize: 'xs',
    fontWeight: '700',
    background: 'brand.primary',
    color,
  };
});

const navigationLinkBadge = {
  paddingX: 'xxs',
  paddingY: 'xxs',
  position: 'relative',
  top: '-xs',
  lineHeight: '100%',
};

export default {
  baseStyle,
  variants: {
    navigationLinkBadge,
  },
} as ComponentStyleConfig;
