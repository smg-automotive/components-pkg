import React, { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

import {
  AccordionButton as ChakraAccordionButton,
  AccordionIcon as ChakraAccordionIcon,
  AccordionItem as ChakraAccordionItem,
  AccordionItemProps as ChakraAccordionItemProps,
  AccordionPanel as ChakraAccordionPanel,
} from '@chakra-ui/react';

type AccordionItemProps = {
  title: string;
  titleIcon?: React.ReactNode;
} & Pick<ChakraAccordionItemProps, 'children'>;

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (props) => {
  const { children, title, titleIcon } = props;
  return (
    <ChakraAccordionItem>
      <ChakraAccordionButton>
        {titleIcon ? titleIcon : null}
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <ChakraAccordionIcon />
      </ChakraAccordionButton>
      <ChakraAccordionPanel>{children}</ChakraAccordionPanel>
    </ChakraAccordionItem>
  );
};

export default AccordionItem;
