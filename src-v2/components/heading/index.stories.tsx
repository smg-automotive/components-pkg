import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Stories, Subtitle, Title } from '@storybook/blocks';

import {
  H1 as H1Component,
  H2 as H2Component,
  H3 as H3Component,
  H4 as H4Component,
  H5 as H5Component,
  H6 as H6Component,
} from './index';

const meta: Meta<typeof H1Component> = {
  title: 'Components/Utils/Heading',
  component: H1Component,

  args: {
    children: 'Title',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },

  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
    },
  },
};
export default meta;

export const H1: StoryObj<typeof H1Component> = {
  name: 'H1',
};

export const H2: StoryObj<typeof H2Component> = {
  render: (args) => <H2Component {...args} />,
  name: 'H2',
};

export const H3: StoryObj<typeof H3Component> = {
  render: (args) => <H3Component {...args} />,
  name: 'H3',
};

export const H4: StoryObj<typeof H4Component> = {
  render: (args) => <H4Component {...args} />,
  name: 'H4',
};

export const H5: StoryObj<typeof H5Component> = {
  render: (args) => <H5Component {...args} />,
  name: 'H5',
};

export const H6: StoryObj<typeof H6Component> = {
  render: (args) => <H6Component {...args} />,
  name: 'H6',
};
