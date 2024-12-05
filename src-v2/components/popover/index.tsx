import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Box,
  Popover as ChakraPopover,
  PopoverProps as ChakraPopoverProps,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';

type ContentPadding = '2xl' | 0;

type MaxWidth = '6xl' | '8xl';

export type PopoverProps = PropsWithChildren<
  {
    content: ReactNode;
    showArrow?: boolean;
    contentPadding?: ContentPadding;
    maxWidth?: MaxWidth;
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
  contentPadding = '2xl',
  maxWidth = '6xl',
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
        <Box zIndex="popover" w="full" h="full" position="relative">
          <PopoverContent
            borderRadius="sm"
            boxShadow="md"
            maxW={maxWidth}
            // required for arrow to popup above shadow
            zIndex="0"
            backgroundColor="white"
            padding={contentPadding}
          >
            {showArrow ? <PopoverArrow backgroundColor="white" /> : null}
            <PopoverBody>{content}</PopoverBody>
          </PopoverContent>
        </Box>
      </Portal>
    </ChakraPopover>
  );
};

export default Popover;
