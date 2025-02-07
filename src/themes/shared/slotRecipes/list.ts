import { defineSlotRecipe } from '@chakra-ui/react';

export const listRecipe = defineSlotRecipe({
  className: 'chakra-list',
  slots: [
    'root',
    'item',
    'itemLabel',
    'itemValue'
  ],
  base: {
    root: {
      '--margin-end': '2',
      marginEnd: 'var(--margin-end)',
      display: 'inline',
      verticalAlign: 'text-bottom',
    },
  },
  variants: {
    sizes: {
      md: { 
        root: {
          textStyle: 'body' 
        },
      },
      sm: {
        root: {
          textStyle: 'body-small' 
        },
      },
    },
  },
  defaultVariants: {
    sizes: 'md',
  },
});

// import {
//   ComponentStyleConfig,
//   createMultiStyleConfigHelpers,
//   defineStyle,
// } from '@chakra-ui/react';
// import { listAnatomy as parts } from '@chakra-ui/anatomy';

// const { defineMultiStyleConfig, definePartsStyle } =
//   createMultiStyleConfigHelpers(parts.keys);

// const baseStyleIcon = defineStyle({
//   marginEnd: '2',
//   display: 'inline',
//   verticalAlign: 'text-bottom',
// });

// const baseStyle = definePartsStyle({
//   icon: baseStyleIcon,
// });

// const sizes = {
//   md: definePartsStyle({
//     container: {
//       textStyle: 'body',
//     },
//   }),
//   sm: definePartsStyle({
//     container: {
//       textStyle: 'body-small',
//     },
//   }),
// };

// const variants = {
//   'icon-inside': definePartsStyle({
//     container: defineStyle({
//       listStylePos: 'inside',
//     }),
//   }),
//   'icon-outside': definePartsStyle({
//     container: defineStyle({
//       listStylePos: 'outside',
//       marginStart: '1em',
//     }),
//   }),
// };

// export default defineMultiStyleConfig({
//   baseStyle,
//   sizes,
//   variants,
//   defaultProps: {
//     size: 'md',
//     variant: 'icon-inside',
//   },
// }) as ComponentStyleConfig;
