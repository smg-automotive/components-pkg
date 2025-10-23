'use client';

import React, { FC, useRef } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { Popover as ChakraPopover, Portal } from '@chakra-ui/react';

import { Stack } from 'src/components/stack';
import { Box } from 'src/components/box';

import { FilterHeading } from '../Heading';
import { FilterActionButton } from '../ActionButton';
import { PopoverFilterProps } from './props';

type Props = {
  onClose: () => void;
  zIndex?: string;
} & Pick<
  PopoverFilterProps,
  | 'actionButton'
  | 'enforceHeight'
  | 'Icon'
  | 'isApplied'
  | 'label'
  | 'numberOfAppliedFilters'
  | 'onResetFilter'
  | 'showCallToActionButton'
  | 'header'
  | 'children'
>;

export const Popover: FC<Props> = ({
  actionButton,
  Icon,
  isApplied,
  enforceHeight,
  label,
  numberOfAppliedFilters,
  onClose,
  onResetFilter,
  showCallToActionButton,
  header,
  children,
  // zIndex = 'popover',
}) => {
  const { language } = useI18n();
  const popoverContentRef = useRef<HTMLDivElement>(null);

  return (
    <Portal>
      <Box zIndex="popover" w="full" h="full" position="relative">
        <ChakraPopover.Positioner>
          <ChakraPopover.Content
            backgroundColor="white"
            borderRadius="sm"
            shadow="md"
            w="6xl"
            minHeight={enforceHeight ? '7xl' : undefined}
            height={enforceHeight ? '7xl' : undefined}
            ref={popoverContentRef}
          >
            <Box as={Stack} h="full" paddingY="2xl">
              <ChakraPopover.Header paddingX="2xl">
                {header ?? (
                  <FilterHeading
                    Icon={Icon}
                    isApplied={isApplied}
                    label={label}
                    numberOfAppliedFilters={numberOfAppliedFilters}
                    onClose={onClose}
                    language={language}
                    onResetFilter={onResetFilter}
                    contentRef={popoverContentRef}
                  />
                )}
              </ChakraPopover.Header>
              <ChakraPopover.Body
                marginTop="2xl"
                marginBottom={showCallToActionButton ? '2xl' : '0'}
                height={enforceHeight ? '7xl' : '0'}
                maxHeight="7xl"
                overflowY="auto"
                paddingX="2xl"
              >
                {children}
              </ChakraPopover.Body>
              {showCallToActionButton ? (
                <ChakraPopover.Footer paddingX="2xl">
                  <FilterActionButton
                    actionButton={actionButton}
                    isApplied={isApplied}
                    onClose={onClose}
                  />
                </ChakraPopover.Footer>
              ) : null}
            </Box>
          </ChakraPopover.Content>
        </ChakraPopover.Positioner>
      </Box>
    </Portal>
  );
};
