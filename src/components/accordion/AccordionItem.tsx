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
  icon?: React.ReactNode;
} & Pick<ChakraAccordionItemProps, 'children'>;

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (props) => {
  const { children, title, icon, ...itemProps } = props;
  return (
    <ChakraAccordionItem {...itemProps}>
      <ChakraAccordionButton>
        {icon ? <Box mr="sm">{icon}</Box> : null}
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
