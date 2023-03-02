import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cardAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: 'white',
    boxShadow: 'xs',
    borderRadius: 'sm',
  },
  header: {
    paddingX: '2xl',
    marginY: '2xl',
  },
  body: {
    paddingX: '2xl',
    marginY: '2xl',
  },
  footer: {
    borderTop: '1px solid',
    borderColor: 'gray.100',
    paddingX: 'lg',
    paddingY: 'md',
  },
});

export default defineMultiStyleConfig({ baseStyle });
