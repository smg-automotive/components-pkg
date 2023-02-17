import React, { FC } from 'react';
import { Box, GridItem } from '@chakra-ui/react';

import MobileOnlyAccordionPanel from '../mobileOnlyAccordion/MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from '../mobileOnlyAccordion/MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from '../mobileOnlyAccordion/MobileOnlyAccordionButton';
import MobileOnlyAccordion from '../mobileOnlyAccordion';
import ListItem from '../list/ListItem';
import List from '../list';
import NavigationLink from './NavigationLink';
import { NavigationLinkNode } from './config/drawerNodeItems';

interface CollapsibleProps {
  node: NavigationLinkNode;
  accordionsEnabled: boolean;
}

const CollapsibleSection: FC<CollapsibleProps> = ({ node }) => {
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
                return (
                  <Box
                    as={ListItem}
                    key={`menuEntry-${index}$`}
                    paddingBottom={{ base: 'lg', md: 'md' }}
                  >
                    <NavigationLink {...item} variant="subNavigationLink" />
                  </Box>
                );
              })}
            </List>
          </Box>
        </MobileOnlyAccordionItem>
      </MobileOnlyAccordion>
    </GridItem>
  );
};

export default CollapsibleSection;
