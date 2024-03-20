import Box from '../box';
import TabPanels from './TabPanels';
import TabPanel from './TabPanel';
import TabList from './TabList';
import Tab from './Tab';

import Tabs from './index';

const Template = (args) => {
  const numberOfTabs = args.numberOfTabs ?? 3;
  const tabs = Array.from({ length: numberOfTabs }, (_, index) => index + 1);
  return (
    <Tabs {...args}>
      <TabList width="max-content">
        {tabs.map((index) => (
          <Tab key={`tab-${index}`}>Tab: {index}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((index) => (
          <TabPanel key={`tab-panel-${index}`}>
            <Box backgroundColor="gray.50" w="full" h="300px">
              <p>Tab panel: {index}</p>
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    isDisabled: false,
    defaultIndex: 0,
    numberOfTabs: 3,
  },

  argTypes: {
    variant: {
      options: ['spaceBetween', 'spaceAround'],
      control: 'select',
    },
  },
};

export const WithOneTabDisabled = {
  render: Template.bind({}),
  name: 'With one tab disabled',

  args: {
    isDisabled: true,
    defaultIndex: 0,
    numberOfTabs: 3,
  },
};

export const WithSecondTabSelected = {
  render: Template.bind({}),
  name: 'With second tab selected',

  args: {
    isDisabled: false,
    defaultIndex: 1,
    numberOfTabs: 3,
  },
};
