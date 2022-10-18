import React, { FC } from 'react';

import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <ChakraTooltip hasArrow {...props}>
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
