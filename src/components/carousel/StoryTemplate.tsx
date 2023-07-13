import React, { FC } from 'react';

import FullHeight from '../fullHeight';
import Flex from '../flex';
import Box from '../box';

import Carousel, { PaginationType } from './index';

const images = [
  'https://placekitten.com/g/800/600',
  'https://placekitten.com/g/900/600',
  'https://placekitten.com/g/900/500',
  'https://placekitten.com/g/700/500',
  'https://placekitten.com/g/450/500',
  'https://placekitten.com/g/750/500',
  'https://placekitten.com/g/820/500',
  'https://placekitten.com/g/750/600',
  'https://placekitten.com/g/750/630',
  'https://placekitten.com/g/750/650',
  'https://placekitten.com/g/750/450',
  'https://placekitten.com/g/750/480',
  'https://placekitten.com/g/750/490',
  'https://placekitten.com/g/870/400',
  'https://placekitten.com/g/980/400',
  'https://placekitten.com/g/950/400',
  'https://placekitten.com/g/950/450',
  'https://placekitten.com/g/930/400',
  'https://placekitten.com/g/930/500',
  'https://placekitten.com/g/940/600',
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
