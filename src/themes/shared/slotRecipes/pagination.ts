import { defineSlotRecipe } from '@chakra-ui/react';
export const paginationRecipe = defineSlotRecipe({
  className: 'chakra-pagination',
  slots: ['paginationContainer', 'paginationButton', 'dots'],
  base: {
    paginationContainer: {
      display: 'flex!important',
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
        backgroundColor: 'gray.900!important',
        color: 'white',
        _hover: {
          backgroundColor: 'inherit',
        },
      },
    },
    dots: {
      minWidth: { base: '0', sm: 'md' },
      height: 'auto',
      textAlign: 'center',
    },
  },
  // variants: {
  //   visual: {
  //     contained: {
  //       paginationButton: {
  //         color: 'white',
  //         backgroundColor: 'gray.900',
  //       },
  //     },
  //     outline: {},
  //   },
  // },
  // variants: {
  //   variant: {
  //     fontRegular: {
  //       root: {},
  //       item: {},
  //       control: {},
  //       indicator: {},
  //       label: { fontWeight: 'regular' },
  //     },
  //     fontBold: {
  //       root: {},
  //       item: {},
  //       control: {},
  //       indicator: {},
  //       label: { fontWeight: 'bold' },
  //     },
  //   },
  //   size: {
  //     base: {
  //       root: {},
  //       item: {},
  //       control: {},
  //       indicator: {},
  //       label: { fontSize: 'base' },
  //     },
  //     md: {
  //       root: {},
  //       item: {},
  //       control: {},
  //       indicator: {},
  //       label: { fontSize: 'md' },
  //     },
  //   },
  // },
  // defaultVariants: { variant: 'fontRegular', size: 'md' },
});

/////

// import { ComponentStyleConfig } from '@chakra-ui/react';

// const parts = ['paginationContainer', 'paginationButton', 'dots'];

// const baseStyle = {
//   paginationContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: { base: 'space-evenly', sm: 'center' },
//     textStyle: 'body',
//   },
//   paginationButton: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     verticalAlign: 'middle',
//     textAlign: 'center',
//     minWidth: 'md',
//     height: 'md',
//     borderRadius: 'sm',
//     padding: { base: 'xs', sm: 'sm' },
//     marginX: { base: '0', sm: 'xxs' },
//     _hover: {
//       backgroundColor: 'gray.100',
//     },
//     _active: {
//       backgroundColor: 'gray.200',
//     },
//     _disabled: {
//       cursor: 'default',
//       _hover: {
//         backgroundColor: 'inherit',
//       },
//     },
//   },
//   dots: {
//     minWidth: { base: 'none', sm: 'md' },
//     height: 'auto',
//     textAlign: 'center',
//   },
// };

// const active = {
//   ...baseStyle,
//   paginationButton: {
//     color: 'white',
//     backgroundColor: 'gray.900',
//     _hover: {
//       backgroundColor: 'gray.900',
//     },
//   },
// };

// const Pagination: ComponentStyleConfig = {
//   baseStyle,
//   parts,
//   variants: {
//     active,
//   },
// };

// export default Pagination;
