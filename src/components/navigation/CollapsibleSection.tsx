import React, { FC } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  GridItem,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';

import Link from '../link';
import { NavigationLinkNode } from '.';
import { textStyles } from '../../themes/shared/typography';

interface CollapsibleProps {
  node: NavigationLinkNode
  accordionsEnabled: boolean,
}

const CollapsibleSection: FC<CollapsibleProps> = ({
  accordionsEnabled,
  node
}) => {
  return (
    <GridItem gridColumn="span 3">
      <Accordion allowMultiple={true} defaultIndex={[0]}>
        <AccordionItem isDisabled={!accordionsEnabled}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {node.text}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList styleType="none" marginStart="none">
              {node.items.map(({url, text}, index) => {
                return (
                  <ListItem key={`menuEntry-${index}$`}>
                    <Link href={url}>{text}</Link>
                  </ListItem>
                );
              })}
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </GridItem>
  );
}

export default CollapsibleSection;
