import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

const numericStyles = defineStyle({
  '&[data-is-numeric=true]': {
    textAlign: 'end',
  },
});

const borderColor = 'colorPalette.200';
const subtleColor = 'colorPalette.50';

export const tableRecipe = defineSlotRecipe({
  className: 'chakra-table',
  slots: [
    'root',
    'header',
    'body',
    'row',
    'columnHeader',
    'cell',
    'footer',
    'caption',
  ],
  base: {
    root: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
      textAlign: 'start',
      verticalAlign: 'top',
      colorPalette: 'gray',
    },
    cell: {
      color: 'gray.900',
      textAlign: 'start',
      alignItems: 'center',
      ...numericStyles,
    },
    columnHeader: {
      color: 'gray.700',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'start',
      ...numericStyles,
    },
    caption: {
      textAlign: 'center',
    },
    footer: {
      borderTop: '1px',
      '&:last-of-type th': {
        borderBottom: 'none',
      },
    },
    row: {
      '&:not(:last-of-type)': {
        borderBottom: 'none',
      },
    },
  },
  variants: {
    interactive: {
      true: {
        body: {
          '& tr': {
            _hover: {
              bg: subtleColor,
            },
          },
        },
      },
    },
    striped: {
      true: {
        row: {
          '&:nth-of-type(odd) td': {
            bg: subtleColor,
          },
        },
        cell: {
          borderColor: subtleColor,
        },
        columnHeader: {
          borderColor: subtleColor,
        },
      },
    },
    showColumnBorder: {
      true: {
        columnHeader: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
        cell: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
      },
    },
    variant: {
      line: {
        columnHeader: {
          borderBottom: '1px',
          borderColor,
        },
        cell: {
          color: 'gray.900',
          borderBottom: '1px',
          borderColor,
        },
        caption: {
          color: 'gray.700',
        },
      },
      outline: {
        columnHeader: {
          borderBottom: '1px',
          borderColor,
        },
        cell: {
          borderBottom: '1px',
          borderColor,
        },
        header: {
          bg: subtleColor,
        },
        footer: {
          borderTop: '1px',
          borderColor,
        },
      },
    },
    size: {
      sm: {
        columnHeader: {
          px: 'xs',
          py: 'xs',
          textStyle: 'heading5',
        },
        cell: {
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
      },
      md: {
        columnHeader: {
          px: 'md',
          py: 'sm',
          textStyle: 'heading4',
          fontSize: 'sm',
        },
        cell: {
          px: 'md',
          py: 'sm',
          textStyle: 'body',
        },
        caption: {
          px: 'md',
          py: 'sm',
          textStyle: 'body',
        },
      },
    },
  },
  compoundVariants: [
    {
      interactive: true,
      striped: true,
      css: {
        row: {
          _hover: {
            '&:nth-of-type(odd) td': {
              bg: 'colorPalette.100',
            },
          },
        },
        body: {
          '& tr': {
            _hover: {
              bg: 'colorPalette.100',
            },
          },
        },
      },
    },
    {
      striped: true,
      showColumnBorder: true,
      css: {
        cell: {
          borderColor,
        },
        columnHeader: {
          borderColor,
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'line',
    size: 'md',
  },
});
