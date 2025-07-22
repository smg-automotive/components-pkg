import React, { FC } from 'react';
import { useAccordionStyles } from '@chakra-ui/react';

import { ChevronUpSmallIcon } from '../icons';

interface AccordionIconProps {
  isOpen?: boolean;
}

export const AccordionIcon: FC<AccordionIconProps> = ({ isOpen }) => {
  const styles = useAccordionStyles();

  const iconStyles = {
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    ...styles.icon,
  };

  return <ChevronUpSmallIcon css={iconStyles} />;
};
