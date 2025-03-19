import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { GridItem } from '@chakra-ui/react';

import MobileOnlyAccordionPanel from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import MobileOnlyAccordion from 'src/components/mobileOnlyAccordion';
import List from 'src/components/list';
import Box from 'src/components/box';

import { NavigationLinkNode } from '../config/DrawerNodeItems';

import { DrawerNavigationLink } from './DrawerNavigationLink';

export const NonCollapsibleSection: FC<{ node: NavigationLinkNode }> = ({
  node,
}) => {
  return (
    <Box py={{ base: '2xl', md: 0 }} px="2xl">
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
  const { t } = useI18n();

  if (!node.translationKey && !node.title) {
    return null;
  }

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
            {node.translationKey ? t(node.translationKey) : node.title}
          </Box>
          <Box
            as={MobileOnlyAccordionPanel}
            paddingTop={{ base: 'lg', md: 0 }}
            paddingBottom="0"
          >
            <List>
              {node.items.map((item, index) => (
                <DrawerNavigationLink item={item} key={index} />
              ))}
            </List>
          </Box>
        </MobileOnlyAccordionItem>
      </MobileOnlyAccordion>
    </GridItem>
  );
};
