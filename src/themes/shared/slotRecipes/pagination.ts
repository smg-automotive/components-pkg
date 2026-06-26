import { defineSlotRecipe } from '@chakra-ui/react';
export const paginationRecipe = defineSlotRecipe({
  className: 'chakra-pagination',
  slots: ['paginationContainer', 'paginationButton', 'dots'],
  base: {
    paginationContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: { base: 'space-evenly', sm: 'center' },
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
      padding: { base: 'xs', sm: 'sm' },
      marginX: { base: '0', sm: 'xxs' },
      cursor: 'pointer',
      _hover: {
        backgroundColor: 'gray.100',
      },
      _active: {
        backgroundColor: 'gray.200',
      },
      _disabled: {
        cursor: 'default',
        color: 'gray.300',
        _hover: {
          backgroundColor: 'inherit',
        },
      },
      _selected: {
        backgroundColor: 'gray.900',
        color: 'white',
        _hover: {
          backgroundColor: 'gray.900',
        },
      },
    },
    dots: {
      minWidth: { base: '0', sm: 'md' },
      height: 'auto',
      textAlign: 'center',
    },
  },
});
