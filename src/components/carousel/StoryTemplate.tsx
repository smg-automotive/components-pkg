import React, { FC } from 'react';

import FullHeight from '../fullHeight';
import Flex from '../flex';
import Box from '../box';

import Carousel, { PaginationType } from './index';

const images = [
  'https://via.placeholder.com/800x600',
  'https://via.placeholder.com/900x600',
  'https://via.placeholder.com/900x500',
  'https://via.placeholder.com/700x500',
  'https://via.placeholder.com/450x500',
  'https://via.placeholder.com/750x500',
  'https://via.placeholder.com/820x500',
  'https://via.placeholder.com/750x600',
  'https://via.placeholder.com/750x630',
  'https://via.placeholder.com/750x650',
  'https://via.placeholder.com/750x450',
  'https://via.placeholder.com/750x480',
  'https://via.placeholder.com/750x490',
  'https://via.placeholder.com/870x400',
  'https://via.placeholder.com/980x400',
  'https://via.placeholder.com/950x400',
  'https://via.placeholder.com/950x450',
  'https://via.placeholder.com/930x400',
  'https://via.placeholder.com/930x500',
  'https://via.placeholder.com/940x600',
];

interface Props {
  args: {
    numberOfSlides: number;
    onSlideClick: boolean;
    fullScreen: boolean;
    onSlideEnter: boolean;
    onSlideLeave: boolean;
    paginationType: PaginationType;
  };
  action: (message: string) => (...args: unknown[]) => void;
}

interface SlideProps {
  index: number;
  fullScreen: boolean;
}

const Slide: FC<SlideProps> = ({ index, fullScreen }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height={fullScreen ? 'full' : '600px'}
    position="relative"
  >
    <img
      src={images[index]}
      alt="a great kitten"
      style={{
        objectFit: 'cover',
        height: '100%',
        width: '100%',
      }}
    />
    <Box position="absolute" backgroundColor="gray.400" p="md" color="white">
      Slide {index}
    </Box>
  </Flex>
);

const DefaultVariant: FC<Props> = ({ args, action }) => {
  return (
    <FullHeight>
      <Carousel
        paginationType={args.paginationType}
        onSlideClick={args.onSlideClick ? action('onSlideClick') : undefined}
      >
        {Array.from({ length: args.numberOfSlides || 6 }).map((_, i) => (
          <Slide index={i + 1} key={`slide-${i + 1}`} fullScreen={false} />
        ))}
      </Carousel>
    </FullHeight>
  );
};

const FullScreenVariant: FC<Props> = ({ args, action }) => {
  return (
    <FullHeight>
      <Carousel
        fullScreen={true}
        onSlideClick={args.onSlideClick ? action('onSlideClick') : undefined}
      >
        {Array.from({ length: args.numberOfSlides || 6 }).map((_, i) => ({
          slide: (
            <Slide index={i + 1} key={`slide-${i + 1}`} fullScreen={true} />
          ),
          onSlideEnter: args.onSlideEnter
            ? () => action('onSlideEnter')(i)
            : undefined,
          onSlideLeave: args.onSlideLeave
            ? () => action('onSlideLeave')(i)
            : undefined,
          thumbnail: (
            <Slide index={i + 1} key={`slide-${i + 1}`} fullScreen={true} />
          ),
        }))}
      </Carousel>
    </FullHeight>
  );
};

const StoryTemplate: FC<Props> = ({ args, action }) => {
  return args.fullScreen ? (
    <FullScreenVariant args={args} action={action} />
  ) : (
    <DefaultVariant args={args} action={action} />
  );
};

export default StoryTemplate;
