import React, { FC } from 'react';

import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
} & Pick<TooltipProps, 'label' | 'placement' | 'maxWidth'>;

const Tooltip: FC<Props> = ({ children, ...props }) => {
  return (
    <ChakraTooltip hasArrow placement="auto" maxWidth="6xl" {...props}>
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
