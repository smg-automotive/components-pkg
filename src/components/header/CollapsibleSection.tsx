import React, { FC } from 'react';
import { Box, GridItem } from '@chakra-ui/react';

import NavigationLink from './NavigationLink';
import { NavigationLinkNode } from './config/drawerNodeItems';
import MobileOnlyAccordionPanel from '../mobileOnlyAccordion/MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from '../mobileOnlyAccordion/MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from '../mobileOnlyAccordion/MobileOnlyAccordionButton';
import MobileOnlyAccordion from '../mobileOnlyAccordion';
import ListItem from '../list/ListItem';
import List from '../list';

interface CollapsibleProps {
  node: NavigationLinkNode;
  accordionsEnabled: boolean;
}

const CollapsibleSection: FC<CollapsibleProps> = ({ node }) => {
  return (
    <GridItem gridColumn="span 3">
      <MobileOnlyAccordion allowMultiple={true}>
        <MobileOnlyAccordionItem>
          <MobileOnlyAccordionButton>
            <Box flex="1" textAlign="left">
              {node.text}
            </Box>
          </MobileOnlyAccordionButton>
          <MobileOnlyAccordionPanel>
            <List>
              {node.items.map((item, index) => {
                return (
                  <ListItem key={`menuEntry-${index}$`}>
                    <NavigationLink {...item} />
                  </ListItem>
                );
              })}
            </List>
          </MobileOnlyAccordionPanel>
        </MobileOnlyAccordionItem>
      </MobileOnlyAccordion>
    </GridItem>
  );
};

export default CollapsibleSection;
