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

type PopoverProps = PropsWithChildren<
  {
    content: ReactNode;
    trigger?: 'hover' | 'click';
    contentWidth?: string;
    contentPadding?: string;
    showArrow?: boolean;
  } & Pick<ChakraPopoverProps, 'placement'>
>;

const Popover: FC<PopoverProps> = ({
  content,
  children,
  placement,
  trigger = 'hover',
  contentWidth,
  contentPadding = '2xl',
  showArrow = true,
}) => {
  return (
    <ChakraPopover
      placement={placement}
      closeOnBlur={false}
      trigger={trigger}
      arrowSize={12}
      gutter={12}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <Box zIndex="popover" w="full" h="full" position="relative">
          <PopoverContent
            borderRadius="sm"
            boxShadow="md"
            maxW="6xl"
            p={contentPadding}
            // required for arrow to popup above shadow
            zIndex="0"
            backgroundColor="white"
            width={contentWidth ? contentWidth : 'auto'}
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
