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
        '--star-color': 'white',
        '--star-background': '#333',
        '--percent': 'calc(var(--rating) / 5 * 100%)',
      }}
      display="inline-block"
      fontSize={size === 'large' ? 'md' : 'sm'}
      fontFamily="Arial"
      lineHeight="xs"
      _before={{
        content: '"★★★★★"',
        letterSpacing: size === 'large' ? '10px' : '5px',
        color: 'var(--star-background)',
        background:
          'linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent))',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-text-stroke': `${size === 'large' ? '2px' : '1px'} #333`,
      }}
    />
  );
};

export default Rating;
