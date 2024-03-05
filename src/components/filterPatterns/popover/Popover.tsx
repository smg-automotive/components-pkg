import React, { FC, useRef } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import {
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  Portal,
} from '@chakra-ui/react';

import Box from 'src/components/box';

import { FilterHeading } from '../Heading';
import FilterActionButton from '../ActionButton';
import { PopoverFilterProps } from './props';

type Props = {
  onClose: () => void;
  isOpen?: boolean;
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

const Popover: FC<Props> = ({
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
  isOpen,
  children,
}) => {
  const { language } = useI18n();
  const popoverContentRef = useRef<HTMLElement | null>(null);
  const maxHeight = showCallToActionButton
    ? '6xl'
    : 'calc(var(--chakra-sizes-6xl) + var(--call-to-action-height))';

  return (
    <Portal>
      <Box zIndex="popover" w="full" h="full" position="relative">
        <PopoverContent
          backgroundColor="white"
          borderRadius="sm"
          paddingY={isOpen ? '2xl' : 0}
          shadow="md"
          w="6xl"
          minHeight={enforceHeight ? '7xl' : undefined}
          height={enforceHeight ? '7xl' : undefined}
          ref={popoverContentRef}
        >
          <PopoverHeader paddingX="2xl">
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
          </PopoverHeader>
          <PopoverBody
            sx={{
              '--call-to-action-height':
                'calc(var(--chakra-sizes-lg) + var(--chakra-space-2xl))',
            }}
            marginTop="2xl"
            maxH={
              showCallToActionButton
                ? '6xl'
                : 'calc(var(--chakra-sizes-6xl) + var(--call-to-action-height))'
            }
            marginBottom={showCallToActionButton ? '2xl' : '0'}
            height={enforceHeight ? maxHeight : undefined}
            maxHeight={maxHeight}
            overflowY="auto"
            paddingX="2xl"
          >
            {children}
          </PopoverBody>
          {showCallToActionButton ? (
            <PopoverFooter paddingX="2xl">
              <FilterActionButton
                actionButton={actionButton}
                isApplied={isApplied}
                onClose={onClose}
              />
            </PopoverFooter>
          ) : null}
        </PopoverContent>
      </Box>
    </Portal>
  );
};

export default Popover;
