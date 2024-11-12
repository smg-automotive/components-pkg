import React, { FC } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Stories, Subtitle, Title } from '@storybook/blocks';

import TypographyShowcase from './TypographyShowcase';
import BreakpointShowCase from './BreakpointShowcase';

const meta: Meta<FC> = {
  title: 'Foundations/Theme',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
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

export type StoryType = StoryObj<FC>;
export const Breakpoints: StoryType = {
  render: () => <BreakpointShowCase />,
};

export const TextStyles: StoryType = {
  render: () => <TypographyShowcase />,
};
