import React, { FC } from 'react';
import { useAccordionItemState } from '@chakra-ui/react';

import { ChevronUpLargeIcon } from '../icons';

const AccordionIcon: FC = () => {
  const { isOpen } = useAccordionItemState();
  const iconStyles = { transform: isOpen ? 'rotate(-180deg)' : undefined };

  return <ChevronUpLargeIcon __css={iconStyles} />;
};

export default AccordionIcon;
