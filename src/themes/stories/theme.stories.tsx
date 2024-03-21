import { ColorPalette } from '@storybook/blocks';

import { Brand } from 'src/types/brand';

import ZindicesShowcase from './ZindicesShowcase';
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

  argTypes: {
    theme: {
      options: [Brand.AutoScout24, Brand.MotoScout24],

      control: {
        type: 'select',
      },
    },
  },
};

export const BorderRadius = {
  render: () => <BorderRadiusShowcase />,
  name: 'borderRadius',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Border = {
  render: () => <BorderShowcase />,
  name: 'border',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Breakpoints = {
  render: () => <BreakpointShowcase />,
  name: 'breakpoints',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Colors = {
  render: () => (
    <ColorPalette>
      <ColorShowcase />
    </ColorPalette>
  ),

  name: 'colors',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Containers = {
  render: () => <ContainerShowcase />,
  name: 'containers',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Opacity = {
  render: () => <OpacityShowcase />,
  name: 'opacity',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Shadows = {
  render: () => <ShadowShowcase />,
  name: 'shadows',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Sizes = {
  render: () => <SizeShowcase />,
  name: 'sizes',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Space = {
  render: () => <SpaceShowcase />,
  name: 'space',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const Typography = {
  render: () => <TypographyShowcase />,
  name: 'typography',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const ZIndices = {
  render: () => <ZindicesShowcase />,
  name: 'zIndices',

  args: {
    theme: Brand.AutoScout24,
  },
};
