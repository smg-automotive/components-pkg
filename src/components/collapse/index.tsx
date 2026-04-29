import React, { FC } from 'react';
import { Collapsible, CollapsibleRootProps } from '@chakra-ui/react';

type CollapseProps = {
  in: boolean;
  animateOpacity: boolean;
} & Omit<CollapsibleRootProps, 'open'>;

const Collapse: FC<CollapseProps> = ({
  in: isOpen,
  animateOpacity,
  ...rest
}) => {
  const animationProps = animateOpacity
    ? { _open: { animation: 'fade-in' as const } }
    : {};
  return (
    <Collapsible.Root open={isOpen} {...rest} {...animationProps}>
      <Collapsible.Content>Some content</Collapsible.Content>
    </Collapsible.Root>
  );
};

export { Collapse, type CollapseProps };
