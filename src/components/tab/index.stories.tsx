import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { tabsRecipe } from 'src/themes/shared/slotRecipes/tabs';
import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Box } from '../box';
import { TabPanels } from './TabPanels';
import { TabPanel } from './TabPanel';
import { TabList } from './TabList';
import { Tab } from './Tab';

import { Tabs } from './index';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,

  render: (args) => {
    return (
      <Tabs {...args}>
        <TabList>
          {Array.from({ length: 3 }).map((_, index) => (
            <Tab key={`tab-${index}`} value={`tab-${index}`}>
              Tab: {index}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Array.from({ length: 3 }).map((_, index) => (
            <TabPanel key={`tab-panel-${index}`} value={`tab-${index}`}>
              <Box backgroundColor="gray.50" w="full" h="5xl">
                <p>Tab panel: {index}</p>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  },

  args: {
    defaultValue: 'tab-2',
    lazyMount: true,
    onValueChange: action('onValueChange'),
    variant: 'default',
  },

  argTypes: {
    ...getRecipeControls(tabsRecipe),
    defaultValue: {
      control: 'select',
      options: ['tab-0', 'tab-1', 'tab-2'],
    },
    lazyMount: {
      control: 'boolean',
    },
    onValueChange: {
      action: 'onValueChange',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Tabs>;

export const Overview: StoryType = {};

export const VariantSpaceBetween: StoryType = {
  name: 'Variant > Space Between',
  args: {
    variant: 'spaceBetween',
  },
};

export const VariantSpaceAround: StoryType = {
  name: 'Variant > Space Around',
  args: {
    variant: 'spaceAround',
  },
};

export const VariantEnclosed: StoryType = {
  name: 'Variant > Enclosed',
  args: {
    variant: 'enclosed',
  },
};

export const VariantFullWidth: StoryType = {
  name: 'Variant > Full Width',
  args: {
    variant: 'fullWidth',
  },
};

export const WithSecondTabSelected: StoryType = {
  name: 'With second tab selected',
  args: {
    defaultValue: 'tab-1',
  },
};
