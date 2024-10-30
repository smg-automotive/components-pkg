import React, { FC } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  ColorPalette,
  Description,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks';

import ZIndicesShowcase from './ZIndicesShowcase';
import TypographyShowcase from './TypographyShowcase';
import SpaceShowcase from './SpaceShowcase';
import SizeShowcase from './SizeShowcase';
import ShadowShowcase from './ShadowShowcase';
import OpacityShowcase from './OpacityShowcase';
import ContainerShowcase from './ContainerShowcase';
import ColorShowcase from './ColorShowcase';
import BreakpointShowcase from './BreakpointShowcase';
import BorderShowcase from './BorderShowcase';
import BorderRadiusShowcase from './BorderRadiusShowcase';

const meta: Meta<FC> = {
  title: 'Foundations/Theme',
  parameters: {
    docs: {
      source: {
        code: null,
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

type StoryType = StoryObj<FC>;
export const BorderRadius: StoryType = {
  render: () => <BorderRadiusShowcase />,
};

export const Border: StoryType = {
  render: () => <BorderShowcase />,
};

export const Breakpoints: StoryType = {
  render: () => <BreakpointShowcase />,
};

export const Colors: StoryType = {
  render: () => (
    <ColorPalette>
      <ColorShowcase />
    </ColorPalette>
  ),
};

export const Containers: StoryType = {
  render: () => <ContainerShowcase />,
};

export const Opacity: StoryType = {
  render: () => <OpacityShowcase />,
};

export const Shadows: StoryType = {
  render: () => <ShadowShowcase />,
};

export const Sizes: StoryType = {
  render: () => <SizeShowcase />,
};

export const Space: StoryType = {
  render: () => <SpaceShowcase />,
};

export const Typography: StoryType = {
  render: () => <TypographyShowcase />,
};

export const ZIndices: StoryType = {
  render: () => <ZIndicesShowcase />,
};
