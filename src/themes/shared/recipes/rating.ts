import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react';

export const ratingRecipe = defineRecipe({
  className: 'rating',
  base: {
    display: 'inline-block',
    fontFamily: 'makeItSans',
    lineHeight: 'xs',
  },
  variants: {
    size: {
      small: { fontSize: 'sm' },
      large: { fontSize: 'md' },
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

const customConfig = defineConfig({
  theme: {
    recipes: {
      title: ratingRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
