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
  } & Pick<ChakraPopoverProps, 'placement'>
>;

const Popover: FC<PopoverProps> = ({ content, children, placement }) => {
  return (
    <ChakraPopover
      placement={placement}
      closeOnBlur={false}
      trigger="hover"
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
            p="2xl"
            // required for arrow to popup above shadow
            zIndex="0"
            backgroundColor="white"
          >
            <PopoverArrow backgroundColor="white" />
            <PopoverBody>{content}</PopoverBody>
          </PopoverContent>
        </Box>
      </Portal>
    </ChakraPopover>
  );
};

export default Popover;
