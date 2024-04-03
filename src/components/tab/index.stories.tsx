import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Box from '../box';
import TabPanels from './TabPanels';
import TabPanel from './TabPanel';
import TabList from './TabList';
import Tab from './Tab';

import TabsComponent from './index';

const meta: Meta<typeof TabsComponent> = {
  title: 'Components/Navigation/Tabs',
  component: TabsComponent,

  args: {
    defaultIndex: 2,
    children: [
      <TabList width="max-content" key="tab-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <Tab key={`tab-${index}`}>Tab: {index}</Tab>
        ))}
      </TabList>,
      <TabPanels key="tab-panels">
        {Array.from({ length: 3 }).map((_, index) => (
          <TabPanel key={`tab-panel-${index}`}>
            <Box backgroundColor="gray.50" w="full" h="300px">
              <p>Tab panel: {index}</p>
            </Box>
          </TabPanel>
        ))}
      </TabPanels>,
    ],
    onChange: action('onChange'),
    isLazy: true,
  },

  argTypes: {
    variant: {
      options: ['spaceBetween', 'spaceAround'],
      control: 'select',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

export const Tabs = {};

export const WithSecondTabSelected = {
  name: 'With second tab selected',

  args: {
    defaultIndex: 1,
  },
};
