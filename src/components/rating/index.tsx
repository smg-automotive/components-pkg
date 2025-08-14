import React, { FC } from 'react';

import { Box, RecipeVariantProps, useRecipe } from '@chakra-ui/react';

import { ratingRecipe } from 'src/themes/shared/recipes/rating';

type RatingVariantProps = RecipeVariantProps<typeof ratingRecipe>;

export type RatingProps = RatingVariantProps & {
  rating: number;
};

export const Rating: FC<RatingProps> = ({ rating, ...props }) => {
  const percent = `calc((${rating.toString()} - 0.16) / 5 * 100%)`;

  const recipe = useRecipe({ key: 'rating' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <Box
      aria-label={`Rating is ${rating} out of 5`}
      css={{
        ...styles,
        '--percent': percent,
        '--star-color': 'colors.orange.300',
        '&::before': {
          content: '"★★★★★"',
          letterSpacing: '0.5em',
          color: 'var(--star-color)',
          background:
            'linear-gradient(90deg, var(--star-color) var(--percent), white var(--percent))',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: '0.1em var(--star-color)',
        },
      }}
    />
  );
};
