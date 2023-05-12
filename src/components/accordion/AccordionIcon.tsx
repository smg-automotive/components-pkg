import React, { FC } from 'react';
import { useAccordionItemState, useAccordionStyles } from '@chakra-ui/react';

import { ChevronUpSmallIcon } from '../icons';

const AccordionIcon: FC = () => {
  const { isOpen } = useAccordionItemState();
  const styles = useAccordionStyles();

  const iconStyles = {
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    ...styles.icon,
  };

  return <ChevronUpSmallIcon __css={iconStyles} />;
};

export default AccordionIcon;
