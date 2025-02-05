import { defineSlotRecipe } from '@chakra-ui/react';

export const simpleHeaderRecipe = defineSlotRecipe({
  className: 'chakra-simple-header',
  slots: ['root', 'header', 'title' ],
  base: {
    root: {
      backgroundColor: 'white',
      borderRadius: 'sm',
      boxShadow: 'xs',
      overflowWrap: 'break-word',
      overflow: 'hidden',
    },
    header: {
      color: 'gray.900',
    },
    title: {
      textStyle: { '2xs': 'heading3', md: 'heading1' },
      wordBreak: 'break-word',
    },
  },
});

// import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

// const baseStyleHeader: SystemStyleObject = {
//   color: 'gray.900',
// };

// const SimpleHeader: ComponentMultiStyleConfig = {
//   parts: ['header', 'title'],
//   baseStyle: {
//     header: baseStyleHeader,
//     title: {
//       textStyle: { '2xs': 'heading3', md: 'heading1' },
//       wordBreak: 'break-word',
//     },
//   },
// };

// export default SimpleHeader;
