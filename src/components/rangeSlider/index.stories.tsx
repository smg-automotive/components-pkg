import { action } from '@storybook/addon-actions';

import Box from '../box';

import RangeSlider from './';

const Template = (args) => {
  return (
    <Box w={340}>
      <RangeSlider
        onChange={(event) => {
          action('change')(event);
        }}
        onChangeEnd={(event) => {
          action('changeEnd')(event);
        }}
        {...args}
      />
    </Box>
  );
};

export default {
  title: 'Components/Filter/Range Slider',
  component: RangeSlider,
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',
};
