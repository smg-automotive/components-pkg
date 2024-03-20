import React from 'react';

import { TooltipIcon } from '../icons';

import TooltipComponent from './index';

const Template = (args) => {
  return (
    <TooltipComponent {...args}>
      <TooltipIcon />
    </TooltipComponent>
  );
};

export default {
  title: 'Components/Overlay/Tooltip',
  component: TooltipComponent,
};

export const Tooltip = {
  render: Template.bind({}),
  name: 'Tooltip',

  args: {
    label: 'I am a tooltip text',
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
