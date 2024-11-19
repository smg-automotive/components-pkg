import { defineRecipe } from '@chakra-ui/react';

export const badgeRecipe = defineRecipe({
  base: {
    textTransform: 'uppercase',
    fontSize: 'xs',
    fontWeight: 'bold',
    background: 'brand.primary',
    color: 'brand.fg',
  },
  variants: {
    variant: {
      base: {
        paddingX: 'xs',
        paddingY: 'xxs',
      },
      navigationLinkBadge: {
        paddingX: 'xxs',
        paddingY: 'xxs',
        position: 'relative',
        top: '-xs',
        lineHeight: 'full',
      },
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});
