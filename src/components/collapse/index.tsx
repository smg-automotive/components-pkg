import React, { FC, PropsWithChildren } from 'react';
import { Collapsible, CollapsibleRootProps } from '@chakra-ui/react';

type CollapseProps = {
  in: boolean;
  animateOpacity?: boolean;
} & Omit<CollapsibleRootProps, 'open'>;

const Collapse: FC<PropsWithChildren<CollapseProps>> = ({
  in: isOpen,
  animateOpacity,
  children,
  ...rest
}) => {
  const animationProps = animateOpacity
    ? { _open: { animation: 'fade-in' as const } }
    : {};
  return (
    <Collapsible.Root open={isOpen} {...rest} {...animationProps}>
      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};

export { Collapse, type CollapseProps };
