import React, { FC } from 'react';

import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <ChakraTooltip bg='gray.900' hasArrow {...props}>
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
