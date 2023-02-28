import React, { FC } from 'react';
import { Box, GridItem } from '@chakra-ui/react';

import MobileOnlyAccordionPanel from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import MobileOnlyAccordion from 'src/components/mobileOnlyAccordion';
import List from 'src/components/list';

import { NavigationLinkNode } from '../config/drawerNodeItems';

import { DrawerNavigationLink } from '.';

export const NonCollapsibleSection: FC<{ node: NavigationLinkNode }> = ({
  node,
}) => {
  return (
    <Box py={{ base: '2xl', md: 0 }} px={{ base: '2xl', md: 0 }}>
      <List>
        {node.items.map((item, index) => {
          return <DrawerNavigationLink item={item} key={index} />;
        })}
      </List>
    </Box>
  );
};

export const CollapsibleSection: FC<{ node: NavigationLinkNode }> = ({
  node,
}) => {
  return (
    <GridItem>
      <MobileOnlyAccordion allowMultiple={true}>
        <MobileOnlyAccordionItem border="none">
          <Box
            as={MobileOnlyAccordionButton}
            flex="1"
            textAlign="left"
            fontSize="base"
            paddingTop={{ base: 'md', md: 0 }}
          >
            {node.text}
          </Box>
          <Box
            as={MobileOnlyAccordionPanel}
            paddingTop={{ base: 'lg', md: 0 }}
            paddingBottom="0"
          >
            <List>
              {node.items.map((item, index) => {
                return <DrawerNavigationLink item={item} key={index} />;
              })}
            </List>
          </Box>
        </MobileOnlyAccordionItem>
      </MobileOnlyAccordion>
    </GridItem>
  );
};
