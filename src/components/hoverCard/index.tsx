import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Box, HoverCard as ChakraHoverCard, Portal } from '@chakra-ui/react';

type ContentPadding = '2xl' | 0;

type MaxWidth = '6xl' | '8xl';

export type PopoverProps = PropsWithChildren<{
  content: ReactNode;
  showArrow?: boolean;
  contentPadding?: ContentPadding;
  maxWidth?: MaxWidth;
  contentPosition?: 'relative' | 'absolute';
  placement?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'md' | 'lg';
}>;

export const HoverCard: FC<PopoverProps> = ({
  content,
  children,
  placement,
  showArrow = true,
  size = 'md',
  contentPadding = '2xl',
  maxWidth = '6xl',
  contentPosition,
}) => {
  return (
    <ChakraHoverCard.Root
      size={size}
      openDelay={100}
      closeDelay={100}
      positioning={{ placement: placement }}
    >
      <ChakraHoverCard.Trigger asChild>{children}</ChakraHoverCard.Trigger>
      <Portal>
        <Box zIndex="popover" position={contentPosition} top="0" left="0">
          <ChakraHoverCard.Positioner>
            <ChakraHoverCard.Content
              borderRadius="sm"
              boxShadow="md"
              maxW={maxWidth}
              // required for arrow to popup above shadow
              zIndex="0"
              bg="white"
              padding={contentPadding}
            >
              {showArrow ? (
                <ChakraHoverCard.Arrow bg="white" zIndex="1" />
              ) : null}
              {content}
            </ChakraHoverCard.Content>
          </ChakraHoverCard.Positioner>
        </Box>
      </Portal>
    </ChakraHoverCard.Root>
  );
};
