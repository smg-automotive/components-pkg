import React, { FC, PropsWithChildren, ReactElement } from 'react';
import {
  Popover as ChakraPopover,
  PopoverProps as ChakraPopoverProps,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';

type PopoverProps = PropsWithChildren<
  {
    content: ReactElement;
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
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>{content}</PopoverBody>
      </PopoverContent>
    </ChakraPopover>
  );
};

export default Popover;
