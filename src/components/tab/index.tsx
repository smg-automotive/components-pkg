import React, { FC } from 'react';
import {
  Tab as ChakraTab,
  TabList as ChakraTabList,
  TabPanel as ChakraTabPanel,
  TabPanels as ChakraTabPanels,
  Tabs as ChakraTabs,
} from '@chakra-ui/react';

const Tabs: FC = () => {
  return (
    <ChakraTabs>
      <ChakraTabList>
        <ChakraTab>One</ChakraTab>
        <ChakraTab>Two</ChakraTab>
        <ChakraTab>Three</ChakraTab>
      </ChakraTabList>

      <ChakraTabPanels>
        <ChakraTabPanel>
          <p>one!</p>
        </ChakraTabPanel>
        <ChakraTabPanel>
          <p>two!</p>
        </ChakraTabPanel>
        <ChakraTabPanel>
          <p>three!</p>
        </ChakraTabPanel>
      </ChakraTabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
