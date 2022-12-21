import { defineStyle } from '@chakra-ui/styled-system';

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

export default {
  baseStyle,
};
