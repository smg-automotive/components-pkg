import React, { FC, PropsWithChildren, ReactNode } from 'react';

import {
  Box,
  Popover as ChakraPopover,
  Portal,
  UseDialogProps,
  UsePopoverProps,
} from '@chakra-ui/react';

type ContentPadding = '2xl' | '0';

type MaxWidth = '6xl' | '8xl';

type Placement = NonNullable<UsePopoverProps['positioning']>['placement'];

export type PopoverProps = PropsWithChildren<{
  content: ReactNode;
  contentPadding?: ContentPadding;
  maxWidth?: MaxWidth;
  contentPosition?: 'relative' | 'absolute';
  placement?: Placement;
  size?: 'md' | 'xl';
  open?: boolean;
  onOpenChange?: UseDialogProps['onOpenChange'];
  showArrow?: boolean;
  closeOnInteractOutside?: boolean;
}>;

export const Popover: FC<PopoverProps> = ({
  content,
  children,
  placement,
  size = 'md',
  contentPadding = '2xl',
  maxWidth = '6xl',
  contentPosition,
  onOpenChange,
  open,
  showArrow = true,
  closeOnInteractOutside = false,
}) => {
  return (
    <ChakraPopover.Root
      size={size}
      positioning={{ placement: placement }}
      closeOnEscape={false}
      closeOnInteractOutside={closeOnInteractOutside}
      open={open}
      onOpenChange={onOpenChange}
    >
      <ChakraPopover.Trigger asChild>{children}</ChakraPopover.Trigger>
      <Portal>
        <Box zIndex="popover" position={contentPosition} top="0" left="0">
          <ChakraPopover.Positioner>
            <ChakraPopover.Content
              borderRadius="sm"
              boxShadow="md"
              maxW={maxWidth}
              // required for arrow to popup above shadow
              zIndex="base"
              bg="white"
              padding={contentPadding}
            >
              {showArrow ? (
                <ChakraPopover.Arrow>
                  <ChakraPopover.ArrowTip />
                </ChakraPopover.Arrow>
              ) : null}

              {content}
            </ChakraPopover.Content>
          </ChakraPopover.Positioner>
        </Box>
      </Portal>
    </ChakraPopover.Root>
  );
};
