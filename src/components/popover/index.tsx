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
    showArrow?: boolean;
  } & Pick<
    ChakraPopoverProps,
    'placement' | 'closeOnBlur' | 'gutter' | 'size' | 'trigger'
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
}) => {
  return (
    <ChakraPopover
      placement={placement}
      closeOnBlur={closeOnBlur}
      trigger={trigger}
      arrowSize={12}
      gutter={gutter}
      size={size}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <Box zIndex="popover" w="full" h="full" position="relative">
          <PopoverContent
            borderRadius="sm"
            boxShadow="md"
            maxW="6xl"
            // required for arrow to popup above shadow
            zIndex="0"
            backgroundColor="white"
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
