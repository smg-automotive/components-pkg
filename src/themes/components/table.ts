import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { tableAnatomy as parts } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  table: {
    fontVariantNumeric: 'lining-nums tabular-nums',
    borderCollapse: 'collapse',
    width: 'full',
  },
  th: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 'wider',
    textAlign: 'start',
  },
  td: {
    textAlign: 'start',
  },
  caption: {
    textAlign: 'center',
    fontWeight: 'medium',
  },
});

const numericStyles = defineStyle({
  '&[data-is-numeric=true]': {
    textAlign: 'end',
  },
});

const variantSimple = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    th: {
      color: 'gray.700',
      borderBottom: '1px',
      borderColor: `${c}.200`,
      ...numericStyles,
    },
    td: {
      borderBottom: '1px',
      color: 'gray.900',
      borderColor: `${c}.200`,
      ...numericStyles,
    },
    caption: {
      color: 'gray.700',
    },
    tfoot: {
      tr: {
        '&:last-of-type': {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
});

const variantStripe = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    th: {
      color: 'gray.600',
      borderBottom: '1px',
      borderColor: `${c}.200`,
      ...numericStyles,
    },
    td: {
      borderBottom: '1px',
      borderColor: `${c}.50`,
      ...numericStyles,
    },
    caption: {
      color: 'gray.600',
    },
    tbody: {
      tr: {
        _odd: {
          'th, td': {
            borderBottomWidth: '1px',
            borderColor: `${c}.50`,
            background: `${c}.50`,
          },
        },
        _hover: {
          'th, td': {
            background: `${c}.100`,
          },
        },
        _last: {
          'th, td': {
            borderBottomWidth: '1px',
            borderColor: `${c}.200`,
          },
        },
      },
    },
    tfoot: {
      tr: {
        _last: {
          'th, td': { borderBottomWidth: 0 },
        },
      },
    },
  };
});

const variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: definePartsStyle({}),
};

const sizes = {
  sm: definePartsStyle({
    th: {
      px: 'xs',
      py: 'xs',
      textStyle: 'heading5',
    },
    td: {
      px: 'xs',
      py: 'xs',
      textStyle: 'body',
    },
    caption: {
      px: 'xs',
      py: 'xs',
      textStyle: 'body',
      fontSize: 'sm',
    },
  }),
  md: definePartsStyle({
    th: {
      px: 'md',
      py: 'sm',
      textStyle: 'heading4',
      fontSize: 'sm',
    },
    td: {
      px: 'md',
      py: 'sm',
      textStyle: 'body',
    },
    caption: {
      px: 'md',
      py: 'sm',
      textStyle: 'body',
    },
  }),
};

const Table = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'simple',
    size: 'md',
    colorScheme: 'gray',
  },
});

export default Table;
