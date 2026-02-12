import React, { FC } from 'react';
import { GridItem } from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
import { MobileOnlyAccordionPanel } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import { MobileOnlyAccordionItem } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import { MobileOnlyAccordionButton } from 'src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import { MobileOnlyAccordion } from 'src/components/mobileOnlyAccordion';
import { List } from 'src/components/list';
import { Box } from 'src/components/box';

import { NavigationLinkNode } from '../config/DrawerNodeItems';

import { DrawerNavigationLink } from './DrawerNavigationLink';

export const NonCollapsibleSection: FC<{ node: NavigationLinkNode }> = ({
  node,
}) => {
  return (
    <Box py={{ base: '2xl', md: '0' }} px="2xl">
      <List.Root>
        {node.items.map((item, index) => {
          return <DrawerNavigationLink item={item} key={index} />;
        })}
      </List.Root>
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
      <MobileOnlyAccordion multiple={true} collapsible={true}>
        <MobileOnlyAccordionItem
          value="section"
          style={{ borderTop: 'none', borderBottom: '1px solid #CFCFCF' }}
        >
          <MobileOnlyAccordionButton>
            <Box flex="1" textAlign="left" fontSize="base">
              {node.translationKey ? t(node.translationKey) : node.title}
            </Box>
          </MobileOnlyAccordionButton>
          <MobileOnlyAccordionPanel pb="0">
            <Box paddingTop={{ base: 'lg', md: '0' }}>
              <List.Root>
                {node.items.map((item, index) => (
                  <DrawerNavigationLink item={item} key={index} />
                ))}
              </List.Root>
            </Box>
          </MobileOnlyAccordionPanel>
        </MobileOnlyAccordionItem>
      </MobileOnlyAccordion>
    </GridItem>
  );
};
