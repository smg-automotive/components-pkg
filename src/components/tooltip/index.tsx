import React, { cloneElement, FC, ReactElement, useState } from 'react';

import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
} & Pick<TooltipProps, 'label' | 'placement' | 'maxWidth'>;

interface AdditionalProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const Tooltip: FC<Props> = ({ children, ...props }) => {
  const [isLabelOpen, setIsLabelOpen] = useState<boolean>(false);

  const childrenWithProps = cloneElement(
    children as ReactElement<AdditionalProps>,
    {
      onMouseEnter: () => setIsLabelOpen(true),
      onMouseLeave: () => setIsLabelOpen(false),
      onClick: () => setIsLabelOpen(true),
    }
  );

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
