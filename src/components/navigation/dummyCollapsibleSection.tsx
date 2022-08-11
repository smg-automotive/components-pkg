import React from 'react';
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

function DummyCollapsibleSection({
  count,
  accordionsEnabled,
}: {
  count: number;
  accordionsEnabled: boolean;
}) {
  return (
    <GridItem gridColumn="span 3">
      <Accordion allowMultiple={true} defaultIndex={[0]}>
        <AccordionItem isDisabled={!accordionsEnabled}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList styleType="none" marginStart="none">
              {new Array(count).fill(null).map((index) => {
                return (
                  <ListItem key={`menuEntry-${index}$`}>
                    <Link href="#">Demo {index}</Link>
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

export default DummyCollapsibleSection;
