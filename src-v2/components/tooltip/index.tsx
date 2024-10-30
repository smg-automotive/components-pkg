import React, { cloneElement, FC, useState } from 'react';

import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
} & Pick<TooltipProps, 'label' | 'placement' | 'maxWidth'>;

const Tooltip: FC<Props> = ({ children, ...props }) => {
  const [isLabelOpen, setIsLabelOpen] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenWithProps = cloneElement(children as React.ReactElement<any>, {
    onMouseEnter: () => setIsLabelOpen(true),
    onMouseLeave: () => setIsLabelOpen(false),
    onClick: () => setIsLabelOpen(true),
  });

  return (
    <ChakraTooltip
      hasArrow
      placement="auto"
      maxWidth="6xl"
      isOpen={isLabelOpen}
      {...props}
    >
      {childrenWithProps}
    </ChakraTooltip>
  );
};

export default Tooltip;
