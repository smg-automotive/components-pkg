import React, { FC } from 'react';

import { Box, useRecipe } from '@chakra-ui/react';

export type RatingProps = {
  rating: number;
  size: 'large' | 'small';
};

export const Rating: FC<RatingProps> = ({ rating, size }) => {
  const percent = `calc((${rating.toString()} - 0.16) / 5 * 100%)`;

  const recipe = useRecipe({ key: 'rating' });
  const styles = recipe({ size });

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
