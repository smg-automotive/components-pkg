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
  placement?:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start';
  size?: 'md' | 'lg';
}>;

export const HoverCard: FC<PopoverProps> = ({
  content,
  children,
  placement,
  showArrow = true,
  closeOnBlur = false,
  gutter = 12,
  size = 'md',
  onClose,
  onOpen,
  isOpen,
  contentPadding = '2xl',
  maxWidth = '6xl',
  contentPosition,
}) => {
  return (
    <ChakraHoverCard.Root
      size={size}
      gutter={gutter}
      open={isOpen}
      isLazy={true}
      positioning={{ placement: placement }}
    >
      <ChakraHoverCard.Trigger>{children}</ChakraHoverCard.Trigger>
      <Portal>
        <Box zIndex="popover" position={contentPosition} top="0" left="0">
          <ChakraHoverCard.Positioner>
            <ChakraHoverCard.Content
              borderRadius="sm"
              boxShadow="md"
              maxW={maxWidth}
              // required for arrow to popup above shadow
              zIndex="0"
              backgroundColor="white"
              padding={contentPadding}
            >
              {showArrow ? (
                <ChakraHoverCard.Arrow backgroundColor="white" />
              ) : null}
              {content}
            </ChakraHoverCard.Content>
          </ChakraHoverCard.Positioner>
        </Box>
      </Portal>
    </ChakraHoverCard.Root>
  );
};
