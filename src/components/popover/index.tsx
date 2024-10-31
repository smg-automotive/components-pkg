import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Popover as ChakraPopover,
  PopoverProps as ChakraPopoverProps,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';

export type PopoverProps = PropsWithChildren<
  {
    content: ReactNode;
    showArrow?: boolean;
  } & Pick<
    ChakraPopoverProps,
    | 'placement'
    | 'closeOnBlur'
    | 'gutter'
    | 'size'
    | 'trigger'
    | 'onClose'
    | 'onOpen'
    | 'isOpen'
  >
>;

const Popover: FC<PopoverProps> = ({
  content,
  children,
  placement,
  trigger = 'hover',
  showArrow = true,
  closeOnBlur = false,
  gutter = 12,
  size = 'md',
  onClose,
  onOpen,
  isOpen,
}) => {
  return (
    <ChakraPopover
      placement={placement}
      closeOnBlur={closeOnBlur}
      trigger={trigger}
      arrowSize={12}
      gutter={gutter}
      size={size}
      onClose={onClose}
      onOpen={onOpen}
      isOpen={isOpen}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent
          borderRadius="sm"
          boxShadow="md"
          maxW="6xl"
          zIndex="popover"
          backgroundColor="white"
        >
          {showArrow ? (
            <PopoverArrow zIndex="popover" backgroundColor="white" />
          ) : null}
          <PopoverBody>{content}</PopoverBody>
        </PopoverContent>
      </Portal>
    </ChakraPopover>
  );
};

export default Popover;
