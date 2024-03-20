import { Brand } from 'src/types/brand';

import ZindicesShowcase from './ZindicesShowcase.tsx';
import TypographyShowcase from './TypographyShowcase.tsx';
import SpaceShowcase from './SpaceShowcase.tsx';
import SizeShowcase from './SizeShowcase.tsx';
import ShadowShowcase from './ShadowShowcase.tsx';
import OpacityShowcase from './OpacityShowcase.tsx';
import ContainerShowcase from './ContainerShowcase.tsx';
import ColorShowcase from './ColorShowcase.tsx';
import BreakpointShowcase from './BreakpointShowcase.tsx';
import BorderShowcase from './BorderShowcase.tsx';
import BorderRadiusShowcase from './BorderRadiusShowcase.tsx';

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
