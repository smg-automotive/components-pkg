import { defineSlotRecipe } from '@chakra-ui/react';

export const simpleHeaderRecipe = defineSlotRecipe({
  className: 'chakra-simple-header',
  slots: ['header', 'mainContainer', 'title', 'iconWrapper'],
  base: {
    header: {
      color: 'gray.900',
    },
    mainContainer: {
      width: 'full',
      maxWidth: 'container.lg',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: { '2xs': 'xl', md: '2xl' },
      paddingX: { '2xs': 'lg', lg: '0' },
    },
    title: {
      textStyle: { '2xs': 'heading3', md: 'heading1' },
      wordBreak: 'break-word',
    },
    iconWrapper: {
      alignSelf: 'baseline',
      paddingLeft: 'md',
      paddingTop: { md: 'sm' },
    },
  },
});
