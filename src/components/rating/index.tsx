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
        '--letter-space': '0.5em',
        '--percent': 'calc((var(--rating) - 0.16) / 5 * 100%)',
      }}
      display="inline-block"
      fontSize={size === 'large' ? 'md' : 'sm'}
      fontFamily="Arial"
      lineHeight="xs"
      _before={{
        content: '"★★★★★"',
        letterSpacing: 'var(--letter-space)',
        color: 'gray.900',
        background:
          'linear-gradient(90deg, var(--chakra-colors-gray-900) var(--percent), white var(--percent))',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-text-stroke': `${
          size === 'large' ? '2px' : '1px'
        } var(--chakra-colors-gray-900)`,
      }}
    />
  );
};

export default Rating;
