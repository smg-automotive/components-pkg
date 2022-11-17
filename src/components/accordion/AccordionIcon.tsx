import React, { FC } from 'react';
import { useAccordionItemState } from '@chakra-ui/react';

import { ChevronDownLargeIcon, ChevronUpLargeIcon } from '../icons';

const AccordionIcon: FC = () => {
  const { isOpen } = useAccordionItemState();
  return isOpen ? <ChevronUpLargeIcon /> : <ChevronDownLargeIcon />;
};

export default AccordionIcon;
