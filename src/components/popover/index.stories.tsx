import React from 'react';

import { TooltipIcon } from '../icons';
import Box from '../box';

import PopoverComponent from './index';

const Template = (args) => {
  return (
    <Box height="200px">
      <PopoverComponent {...args}>
        <TooltipIcon />
      </PopoverComponent>
    </Box>
  );
};

export default {
  title: 'Components/Overlay/Popover',
  component: PopoverComponent,
};

export const Popover = {
  render: Template.bind({}),
  name: 'Popover',

  args: {
    content: 'I am popover content',
    placement: 'auto',
  },

  argTypes: {
    placement: {
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'bottom',
        'right',
        'left',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],

      control: 'select',
    },
  },
};
