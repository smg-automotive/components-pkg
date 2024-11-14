import React from 'react';
import { ColorPalette } from '@storybook/blocks';
import { Box, chakra } from '@chakra-ui/react';

import { convertRemEmToPx } from 'src/utilities/convertRemEmToPx';

import TokenShowcase from './TokenShowcase';
import meta, { StoryType } from './theme.stories';
import ColorShowcase from './ColorShowcase';

export default {
  ...meta,
  title: 'Foundations/Theme/Tokens',
};

const conversionToPixels = {
  unitLabel: 'Pixels',
  conversionFunction: (value: string) => `${convertRemEmToPx(value)}px`,
  caption:
    'Pixel values are only used as a reference for Figma designs. We use rem as units.',
};

export const AspectRatios: StoryType = {
  render: () => (
    <TokenShowcase
      tokenPath="aspectRatios"
      renderDemo={(name) => (
        <Box
          aspectRatio={name}
          w="200px"
          bg="red.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          I am {name}
        </Box>
      )}
    />
  ),
};

export const BorderRadius: StoryType = {
  render: () => (
    <TokenShowcase<'radii'>
      tokenPath="radii"
      renderDemo={(name) => (
        <Box
          backgroundColor="red.100"
          width="3xl"
          height="md"
          borderRadius={name}
        />
      )}
    />
  ),
};

export const Border: StoryType = {
  render: () => (
    <TokenShowcase<'borders'>
      tokenPath="borders"
      renderDemo={(name) => <Box borderBottom={name} w="3xl" />}
    />
  ),
};

export const Colors: StoryType = {
  render: () => (
    <ColorPalette>
      <ColorShowcase />
    </ColorPalette>
  ),
};

export const Opacity: StoryType = {
  render: () => (
    <TokenShowcase<'opacity'>
      tokenPath="opacity"
      renderDemo={(name) => (
        <Box bgColor="gray.900" rounded="full" opacity={name} w="xl" h="xl" />
      )}
    />
  ),
};

export const Shadows: StoryType = {
  render: () => (
    <TokenShowcase<'shadows'>
      tokenPath="shadows"
      renderValue={false}
      renderDemo={(name) => (
        <Box
          key={name}
          m="md"
          w="lg"
          h="lg"
          shadow={name}
          border="1px"
          borderColor="gray.300"
        />
      )}
    />
  ),
};

export const Sizes: StoryType = {
  render: () => (
    <TokenShowcase<'sizes'>
      tokenPath="sizes"
      renderConversion={conversionToPixels}
    />
  ),
};

export const ContainerSizes: StoryType = {
  render: () => <TokenShowcase<'sizes'> tokenPath="sizes.container" />,
};

export const Spacing: StoryType = {
  render: () => (
    <TokenShowcase<'spacing'>
      tokenPath="spacing"
      renderConversion={conversionToPixels}
      renderDemo={(name) => (
        <Box bg="gray.200" p={name}>
          <Box bg="white" textAlign="center" width="auto">
            {name}
          </Box>
        </Box>
      )}
    />
  ),
};

export const ZIndices: StoryType = {
  render: () => <TokenShowcase<'zIndex'> tokenPath="zIndex" />,
};

export const FontSizes: StoryType = {
  render: () => (
    <TokenShowcase<'fontSizes'>
      tokenPath="fontSizes"
      renderConversion={conversionToPixels}
      renderDemo={(name) => (
        <chakra.p fontSize={name}>I am {name} size</chakra.p>
      )}
    />
  ),
};

export const FontWeights: StoryType = {
  render: () => (
    <TokenShowcase<'fontWeights'>
      tokenPath="fontWeights"
      renderDemo={(name) => (
        <chakra.p fontWeight={name}>I am {name} weight</chakra.p>
      )}
    />
  ),
};

export const LineHeights: StoryType = {
  render: () => (
    <TokenShowcase<'lineHeights'>
      tokenPath="lineHeights"
      renderDemo={(name) => (
        <chakra.p lineHeight={name}>
          I am {name} height <br />
          second line for better visibility
        </chakra.p>
      )}
    />
  ),
};
