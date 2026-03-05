import React from 'react';

import {
  Popover as PopoverComponents,
  PopoverProps,
} from 'src/components/popover';

import { HoverCard } from 'src/components/hoverCard';

type Props = PopoverProps & {
  trigger?: 'hover' | 'click';
  onOpen?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
};

export const Popover: React.FC<Props> = ({ trigger = 'click', ...props }) => {
  const { onOpen, onClose, isOpen, ...rest } = props;
  if (trigger === 'hover') {
    return <HoverCard {...rest} />;
  }

  return (
    <PopoverComponents
      {...rest}
      open={isOpen}
      onOpenChange={({ open }) => {
        if (open) {
          onOpen?.();
        } else {
          onClose?.();
        }
      }}
    />
  );
};
