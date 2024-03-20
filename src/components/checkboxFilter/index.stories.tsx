import { action } from '@storybook/addon-actions';

import Box from '../box';

import CheckboxFilterTemplate from './StoryTemplate.tsx';
import GroupedCheckboxFilterStoryTemplate from './GroupedCheckboxFilterStoryTemplate.tsx';

import CheckboxFilter from './index';

const Template = (args) => {
  return (
    <Box w="8xl">
      <CheckboxFilterTemplate {...args} />
    </Box>
  );
};

const GroupedTemplate = (args) => {
  return (
    <Box w="8xl">
      <GroupedCheckboxFilterStoryTemplate {...args} />
    </Box>
  );
};

export default {
  title: 'Components/Filter/Checkbox',

  argTypes: {
    onApplyAction: {
      table: {
        disable: true,
      },
    },

    defaultFacets: {
      table: {
        disable: true,
      },
    },

    image: {
      table: {
        disable: true,
      },
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    onApplyAction: action('onApply'),
  },
};

export const LabelWithImageWithLargeText = {
  render: Template.bind({}),
  name: 'Label with image, with large text',

  args: {
    onApplyAction: action('onApply'),
    image: (
      <img src="https://placekitten.com/g/220/100" alt="placeholder image" />
    ),
  },
};

export const CheckboxWithMultipleColumns = {
  render: Template.bind({}),
  name: 'Checkbox with multiple columns',

  args: {
    onApplyAction: action('onApply'),
    numberOfColumnsOnDesktop: 3,
  },
};

export const GroupedCheckboxFilter = {
  render: GroupedTemplate.bind({}),
  name: 'Grouped checkbox filter',

  args: {
    onApplyAction: action('onApply'),
    onToggleCheckboxGroupAction: action('onToggleCheckboxGroup'),
  },
};
