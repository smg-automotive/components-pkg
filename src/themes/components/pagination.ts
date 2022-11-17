import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = ['paginationContainer', 'paginationButton', 'dots'];

const baseStyle = {
  paginationContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: 'body',
  },
  paginationButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    minWidth: 'md',
    height: 'md',
    borderRadius: 'sm',
    _hover: {
      backgroundColor: 'gray.100',
    },
    _disabled: {
      cursor: 'default',
      _hover: {
        backgroundColor: 'inherit',
      },
    },
  },
  dots: {
    minWidth: 'md',
    height: 'auto',
    textAlign: 'center',
  },
};

const active = {
  ...baseStyle,
  paginationButton: {
    color: 'white',
    backgroundColor: 'gray.900',
    _hover: {
      backgroundColor: 'gray.900',
    },
  },
};

const Pagination: ComponentStyleConfig = {
  baseStyle,
  parts,
  variants: {
    active,
  },
};

export default Pagination;
