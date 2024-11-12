import React from 'react';
import { ColorPalette } from '@storybook/blocks';
import { Box, Text } from '@chakra-ui/react';

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

export const BorderRadius: StoryType = {
  render: () => (
    <TokenShowcase
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
    <TokenShowcase
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
    <TokenShowcase
      tokenPath="opacity"
      renderDemo={(name) => (
        <Box bgColor="gray.900" rounded="full" opacity={name} w="xl" h="xl" />
      )}
    />
  ),
};

export const Shadows: StoryType = {
  render: () => (
    <TokenShowcase
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
    <TokenShowcase tokenPath="sizes" renderConversion={conversionToPixels} />
  ),
};

export const ContainerSizes: StoryType = {
  render: () => <TokenShowcase tokenPath="sizes.container" />,
};

export const Spacing: StoryType = {
  render: () => (
    <TokenShowcase
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
  render: () => <TokenShowcase tokenPath="zIndex" />,
};

export const FontSizes: StoryType = {
  render: () => (
    <TokenShowcase
      tokenPath="fontSizes"
      renderConversion={conversionToPixels}
      renderDemo={(name) => <Text fontSize={name}>I am {name} size</Text>}
    />
  ),
};

export const FontWeights: StoryType = {
  render: () => (
    <TokenShowcase
      tokenPath="fontWeights"
      renderDemo={(name) => <Text fontWeight={name}>I am {name} weight</Text>}
    />
  ),
};

export const LineHeights: StoryType = {
  render: () => (
    <TokenShowcase
      tokenPath="lineHeights"
      renderDemo={(name) => (
        <Text lineHeight={name}>
          I am {name} height <br />
          second line for better visibility
        </Text>
      )}
    />
  ),
};
