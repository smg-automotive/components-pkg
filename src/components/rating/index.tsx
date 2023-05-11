import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
  return (
    <Box
      aria-label={`Rating is ${rating} out of 5`}
      sx={{
        '--rating': rating.toString(),
        '--star-size': '60px',
        '--star-color': 'white',
        '--star-background': 'black',
        '--percent': 'calc(var(--rating) / 5 * 100%)',
      }}
      display="inline-block"
      fontSize="var(--star-size)"
      fontFamily="Times"
      lineHeight="1"
      _before={{
        content: '"★★★★★"',
        letterSpacing: '3px',
        color: 'var(--star-background)',
        background:
          'linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent))',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-text-stroke': '3px black',
      }}
    />
  );
};

export default Rating;
