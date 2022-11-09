import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = ['paginationContainer', 'paginationButton'];

const baseStyle = {
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: 'body',
  },
  paginationButton: {
    width: 'md',
    height: 'md',
    borderRadius: 'sm',
    paddingX: 'sm',
    _hover: {
      backgroundColor: 'gray.100',
    },
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
