import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  rating: number;
  size: 'large' | 'small';
};

const Rating: FC<Props> = ({ rating, size }) => {
  return (
    <Box
      aria-label={`Rating is ${rating} out of 5`}
      sx={{
        '--rating': rating.toString(),
        '--percent': 'calc((var(--rating) - 0.16) / 5 * 100%)',
        '--star-color': 'var(--chakra-colors-gray-900)',
      }}
      display="inline-block"
      fontSize={size === 'large' ? 'md' : 'sm'}
      fontFamily="Arial"
      lineHeight="xs"
      _before={{
        content: '"★★★★★"',
        letterSpacing: '0.5em',
        color: 'var(--star-color)',
        background:
          'linear-gradient(90deg, var(--star-color) var(--percent), white var(--percent))',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-text-stroke': `0.07em var(--star-color)`,
      }}
    />
  );
};

export default Rating;
