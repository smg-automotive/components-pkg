import React from 'react';
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

export default {
  title: 'Foundations/Theme',
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

export const BorderRadius = {
  render: () => <BorderRadiusShowcase />,
  name: 'borderRadius',
};

export const Border = {
  render: () => <BorderShowcase />,
  name: 'border',
};

export const Breakpoints = {
  render: () => <BreakpointShowcase />,
  name: 'breakpoints',
};

export const Colors = {
  render: () => (
    <ColorPalette>
      <ColorShowcase />
    </ColorPalette>
  ),

  name: 'colors',
};

export const Containers = {
  render: () => <ContainerShowcase />,
  name: 'containers',
};

export const Opacity = {
  render: () => <OpacityShowcase />,
  name: 'opacity',
};

export const Shadows = {
  render: () => <ShadowShowcase />,
  name: 'shadows',
};

export const Sizes = {
  render: () => <SizeShowcase />,
  name: 'sizes',
};

export const Space = {
  render: () => <SpaceShowcase />,
  name: 'space',
};

export const Typography = {
  render: () => <TypographyShowcase />,
  name: 'typography',
};

export const ZIndices = {
  render: () => <ZIndicesShowcase />,
  name: 'zIndices',
};
