import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Box from '../box';
import TabPanels from './TabPanels';
import TabPanel from './TabPanel';
import TabList from './TabList';
import Tab from './Tab';

import Tabs from './index';

import TabsComponent from './index';

const meta: Meta<typeof TabsComponent> = {
  title: 'Components/Navigation/Tabs',
  component: TabsComponent,

  render: ({ children, ...args }) => {
    return (
      <Tabs
        {...args}
        {...(args.variant === ('default' as unknown as undefined) && {
          variant: undefined,
        })}
      >
        <TabList key="tab-list">
          {Array.from({ length: 3 }).map((_, index) => (
            <Tab key={`tab-${index}`}>Tab: {index}</Tab>
          ))}
        </TabList>
        <TabPanels key="tab-panels">
          {Array.from({ length: 3 }).map((_, index) => (
            <TabPanel key={`tab-panel-${index}`}>
              <Box backgroundColor="gray.50" w="full" h="300px">
                <p>Tab panel: {index}</p>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  },

  args: {
    defaultIndex: 2,
    onChange: action('onChange'),
    isLazy: true,
    variant: 'default' as unknown as undefined,
  },

  argTypes: {
    variant: {
      options: ['spaceBetween', 'spaceAround', 'enclosed', 'default'],
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

type StoryType = StoryObj<typeof TabsComponent>;
export const Overview: StoryType = {};

export const WithSecondTabSelected: StoryType = {
  name: 'With second tab selected',

  args: {
    defaultIndex: 1,
  },
};
