import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { sizes } from 'src/themes/shared/tokens/sizes';

import { Box, Flex, Separator, Text } from '../index';
import { PageLayout } from './Page';

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/Pages/Page',
  component: PageLayout,

  args: {
    header: (
      <Box h="2xl" bg="gray.50">
        <Separator />
        <Flex justifyContent="center" alignItems="center" h="full">
          <Text p="2xl">I am the header</Text>
        </Flex>
      </Box>
    ),

    maxContentWidth: 'lg',

    footer: (
      <Box h="2xl" bg="gray.50">
        <Separator />
        <Flex justifyContent="center" alignItems="center" h="full">
          <Text p="2xl">I am the footer</Text>
        </Flex>
      </Box>
    ),

    children: 'content',
  },

  argTypes: {
    header: {
      table: {
        disable: true,
      },
    },

    footer: {
      table: {
        disable: true,
      },
    },

    skyScraperAd: {
      table: {
        disable: true,
      },
    },

    heroAd: {
      table: {
        disable: true,
      },
    },

    children: {
      mapping: {
        content: (
          <Flex
            bg="green.100"
            h="container.sm"
            justifyContent="center"
            alignItems="center"
          >
            <Text>Content</Text>
          </Flex>
        ),
      },
      table: {
        disable: true,
      },
    },

    maxContentWidth: {
      options: Object.keys(sizes.container),

      control: {
        type: 'select',
      },
    },
  },

  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type StoryType = StoryObj<typeof PageLayout>;
export const LayoutWithoutAds: StoryType = {
  name: 'Layout without ads',
};

export const LayoutWithSidebarAds: StoryType = {
  name: 'Layout with sidebar ads',

  args: {
    skyScraperAd: (
      <Flex bg="red.100" h="8xl" justifyContent="center" alignItems="center">
        <Text>Sidebar Ads</Text>
      </Flex>
    ),
  },
};

export const LayoutWithHeroAndSidebarAds: StoryType = {
  name: 'Layout with hero and sidebar ads',

  args: {
    skyScraperAd: (
      <Flex bg="red.100" h="8xl" justifyContent="center" alignItems="center">
        <Text>Sidebar Ads</Text>
      </Flex>
    ),

    heroAd: (
      <Flex bg="blue.100" h="6xl" justifyContent="center" alignItems="center">
        <Text>Hero Ad</Text>
      </Flex>
    ),
  },
};
