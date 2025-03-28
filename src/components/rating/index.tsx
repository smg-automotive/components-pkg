import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

export type Props = {
  rating: number;
  size: 'large' | 'small';
};

export const Rating: FC<Props> = ({ rating, size }) => {
  return (
    <Box
      aria-label={`Rating is ${rating} out of 5`}
      display="inline-block"
      fontSize={size === 'large' ? 'md' : 'sm'}
      fontFamily="Arial"
      lineHeight="xs"
      css={{
        '--rating': rating.toString(),
        '--percent': 'calc((var(--rating) - 0.16) / 5 * 100%)',
        '--star-color': 'colors.orange.300',
      }}
      _before={{
        content: '"★★★★★"',
        letterSpacing: '0.5em',
        color: 'var(--star-color)',
        background: `linear-gradient(90deg, var(--star-color) var(--percent), white var(--percent))`,
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '0.1em var(--star-color)',
      }}
    />
  );
};
