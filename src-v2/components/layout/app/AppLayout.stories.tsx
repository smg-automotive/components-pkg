import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Stories, Subtitle, Title } from '@storybook/blocks';

import Center from 'src/components/center';
import Box from 'src/components/box';

import AppLayoutHeader from './Header';
import AppLayoutFooter from './Footer';
import AppLayoutContent from './Content';
import AppLayout from './AppLayout';

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/App',
  component: AppLayout,

  args: {
    children: [
      <AppLayoutHeader key="header">
        <Box
          height="70px"
          width="full"
          padding="2xl"
          fontWeight="bold"
          backgroundColor="deeppink"
        >
          <Center>Dummy Header</Center>
        </Box>
      </AppLayoutHeader>,
      <AppLayoutContent key="content">
        <Box
          height="70px"
          width="full"
          padding="2xl"
          fontWeight="bold"
          minHeight="full"
          backgroundColor="lightgrey"
        >
          <Center>Dummy Content</Center>
        </Box>
      </AppLayoutContent>,
      <AppLayoutFooter key="footer">
        <Box
          height="70px"
          width="full"
          padding="2xl"
          fontWeight="bold"
          backgroundColor="purple"
        >
          <Center>Dummy Footer</Center>
        </Box>
      </AppLayoutFooter>,
    ],
  },

  parameters: {
    layout: 'fullscreen',
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

export const Overview: StoryObj<typeof AppLayout> = {};
