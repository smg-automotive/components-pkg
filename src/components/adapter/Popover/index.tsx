import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';

import {
  Popover as PopoverComponents,
  PopoverProps,
} from '@/src/components/popover';

import { HoverCard } from '@/src/components/hoverCard';

type Props = PopoverProps & {
  trigger?: 'hover' | 'click';
  onOpen?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
  closeOnBlur?: boolean;
};

export const Popover: React.FC<Props> = ({ trigger = 'hover', ...props }) => {
  const { onOpen, onClose, isOpen, closeOnBlur, ...rest } = props;
  const [internalIsOpen, setInternalIsOpen] = React.useState(false);
  const [supportsHover] = useMediaQuery(['(hover: hover) and (pointer: fine)']);
  // Touch devices cannot reliably open hover cards, so hover-triggered popovers
  // fall back to a click popover that owns its open state when uncontrolled.
  const usesHoverCard = trigger === 'hover' && supportsHover;
  const isControlled = isOpen !== undefined;

  if (usesHoverCard) {
    return <HoverCard {...rest} />;
  }

  return (
    <PopoverComponents
      {...rest}
      open={isControlled ? isOpen : internalIsOpen}
      closeOnInteractOutside={closeOnBlur ?? trigger === 'hover'}
      onOpenChange={({ open }) => {
        if (!isControlled) {
          setInternalIsOpen(open);
        }

        if (open) {
          onOpen?.();
        } else {
          onClose?.();
        }
      }}
    />
  );
};
