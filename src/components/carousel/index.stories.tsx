import React, { FC } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import FullHeight from '../fullHeight';
import Flex from '../flex';
import Box from '../box';

import CarouselComponent, { PaginationType } from './index';

const images = [
  'https://picsum.photos/800/600',
  'https://picsum.photos/900/600',
  'https://picsum.photos/900/500',
  'https://picsum.photos/700/500',
  'https://picsum.photos/450/500',
  'https://picsum.photos/750/500',
];

interface SlideProps {
  index: number;
  fullScreen: boolean;
  imageSrc: string;
}
const Slide: FC<SlideProps> = ({ index, imageSrc, fullScreen }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height={fullScreen ? 'full' : '600px'}
    position="relative"
  >
    <img
      src={imageSrc}
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

const meta: Meta<typeof CarouselComponent> = {
  title: 'Components/Data display/Carousel',
  component: CarouselComponent,
  decorators: [
    (Story) => {
      const [args] = useArgs();
      return args.fullScreen ? (
        <FullHeight>
          <Story />
        </FullHeight>
      ) : (
        <Box m="auto" maxW="900px" p="md">
          <Story />
        </Box>
      );
    },
  ],

  args: {
    onSlideClick: action('onSlideClick'),
    onSlideSelect: action('onSlideSelect'),
    paginationType: PaginationType.None,
    children: images.map((imageSrc, i) => (
      <Slide
        key={`slide-${i + 1}`}
        index={i + 1}
        fullScreen={false}
        imageSrc={imageSrc}
      />
    )),
  },

  argTypes: {
    fullScreen: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    paginationType: {
      options: [PaginationType.None, PaginationType.Number, PaginationType.Dot],
      control: { type: 'select' },
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type StoryType = StoryObj<typeof CarouselComponent>;
export const Overview: StoryType = {};

export const WithNumbersPagination: StoryType = {
  args: {
    paginationType: PaginationType.Number,
  },
};

export const WithDotsPagination: StoryType = {
  args: {
    paginationType: PaginationType.Dot,
  },
};

export const StartingFromSpecificSlide: StoryType = {
  args: {
    startIndex: 2,
  },
};

export const SlidesPerView: StoryType = {
  args: {
    slidesPerView: { base: 1, sm: 2, md: 3, lg: 4 },
    loop: false,
    slidesToScroll: 'auto',
  },
};

export const FullScreen: StoryType = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      // TEMP: This is a workaround as the library that generates the source code
      // for the docs does not support the array of objects as children.
      source: { type: 'code' },
    },
  },
  argTypes: {
    paginationType: {
      table: { disable: true },
    },
  },
  args: {
    fullScreen: true,
    children: images.map((imageSrc, i) => ({
      slide: (
        <Slide
          index={i + 1}
          key={`slide-${i + 1}`}
          fullScreen={true}
          imageSrc={imageSrc}
        />
      ),
      onSlideEnter: () => action('onSlideEnter')(i),
      onSlideLeave: () => action('onSlideLeave')(i),
      thumbnail: (
        <Slide
          index={i + 1}
          key={`thumbnail-${i + 1}`}
          fullScreen={true}
          imageSrc={imageSrc}
        />
      ),
    })),
  },
};
