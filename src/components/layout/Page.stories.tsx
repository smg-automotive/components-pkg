import { sizes } from 'src/themes/shared/sizes';

import { Box, Divider, Flex, Text } from '../index';
import PageLayout from './Page';

const Template = (args) => <PageLayout {...args} />;

export default {
  title: 'Layout/Pages/Page',
  component: PageLayout,

  args: {
    header: (
      <Box h="80px" bg="gray.50">
        <Divider />
        <Flex justifyContent="center" alignItems="center" h="full">
          <Text p="2xl">I am the header</Text>
        </Flex>
      </Box>
    ),

    maxContentWidth: 'lg',

    footer: (
      <Box h="400px" bg="gray.50">
        <Divider />
        <Flex justifyContent="center" alignItems="center" h="full">
          <Text p="2xl">I am the footer</Text>
        </Flex>
      </Box>
    ),

    children: (
      <Flex
        bg="green.100"
        h="1200px"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Content</Text>
      </Flex>
    ),
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

export const LayoutWithoutAds = {
  render: Template.bind({}),
  name: 'Layout without ads',
};

export const LayoutWithSidebarAds = {
  render: Template.bind({}),
  name: 'Layout with sidebar ads',

  args: {
    skyScraperAd: (
      <Flex bg="red.100" h="600px" justifyContent="center" alignItems="center">
        <Text>Sidebar Ads</Text>
      </Flex>
    ),
  },
};

export const LayoutWithHeroAndSidebarAds = {
  render: Template.bind({}),
  name: 'Layout with hero and sidebar ads',

  args: {
    skyScraperAd: (
      <Flex bg="red.100" h="600px" justifyContent="center" alignItems="center">
        <Text>Sidebar Ads</Text>
      </Flex>
    ),

    heroAd: (
      <Flex bg="blue.100" h="300px" justifyContent="center" alignItems="center">
        <Text>Hero Ad</Text>
      </Flex>
    ),
  },
};
