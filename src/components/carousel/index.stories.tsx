import { action } from '@storybook/addon-actions';

import StoryTemplate from './StoryTemplate';
import Carousel, { PaginationType } from './index.tsx';

const Template = (args) => {
  // mdx has a limitation that you cannot pass an array of objects as children. Extracting it to a separate component solves the issue
  return <StoryTemplate args={args} action={action} />;
};

export default {
  title: 'Components/Data display/Carousel',
  component: Carousel,

  argTypes: {
    fullScreen: {
      table: {
        disable: true,
      },
    },

    numberOfSlides: {
      control: {
        type: 'number',
        min: 1,
        max: 20,
        step: 1,
      },
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    startIndex: 0,
    onSlideClick: true,
    fullScreen: false,
    numberOfSlides: 6,
  },
};

export const FullScreen = {
  render: Template.bind({}),
  name: 'Full screen',

  args: {
    startIndex: 0,
    onSlideClick: true,
    fullScreen: true,
    numberOfSlides: 6,
    onSlideEnter: true,
    onSlideLeave: true,
  },
};

export const WithNumbersPagination = {
  render: Template.bind({}),
  name: 'With Numbers Pagination',

  args: {
    startIndex: 0,
    onSlideClick: true,
    fullScreen: false,
    numberOfSlides: 6,
    paginationType: PaginationType.Number,
  },
};

export const WithDotsPagination = {
  render: Template.bind({}),
  name: 'With Dots Pagination',

  args: {
    startIndex: 0,
    onSlideClick: true,
    fullScreen: false,
    numberOfSlides: 6,
    paginationType: PaginationType.Dot,
  },
};
