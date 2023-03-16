import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  w: 'sm',
  h: 'sm',
  fontSize: 'xs',
  color: 'gray.800',
  borderRadius: 'sm',
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  _hover: {
    bg: 'blackAlpha.100',
  },
  _active: {
    bg: 'blackAlpha.200',
  },
});

const CloseButton = defineStyleConfig({
  baseStyle,
});

export default CloseButton;
