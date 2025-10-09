import { Meta, StoryObj } from '@storybook/react';

import { emBreakpoints } from 'src/themes/shared/breakpoints';

import { Box } from './index';

const breakpointControl = {
  options: Object.keys(emBreakpoints),
  control: {
    type: 'select' as const,
  },
};

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },

  args: {
    padding: '2xl',
    color: 'gray.500',
    border: '1px',
    borderColor: 'green.500',
    children: 'I am a box',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    hideBelow: breakpointControl,
    hideFrom: breakpointControl,
  },
};
export default meta;
export const Overview: StoryObj<typeof Box> = {};

/** The component is hidden below `md` breakpoint */
export const HideBelow: StoryObj<typeof Box> = {
  name: 'Hide element below breakpoint',

  args: {
    hideBelow: 'md',
    children: 'I am hidden below md',
  },
};

/** The component is hidden on `md` and higher breakpoints */
export const HideFrom: StoryObj<typeof Box> = {
  name: 'Hide element from breakpoint',

  args: {
    hideFrom: 'md',
    children: 'I am hidden from md',
  },
};

/** The component is only visible on `md` breakpoint */
export const TargetBreakpoint: StoryObj<typeof Box> = {
  name: 'Show element on a specific breakpoint only',

  args: {
    hideBelow: 'md',
    hideFrom: 'lg',
    children: 'I am visible only on md',
  },
};
