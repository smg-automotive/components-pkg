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
} & Pick<
  PopoverFilterProps,
  | 'actionButton'
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
  isApplied,
  label,
  numberOfAppliedFilters,
  onClose,
  onResetFilter,
  showCallToActionButton,
  header,
  children,
}) => {
  const { language } = useI18n();
  const popoverContentRef = useRef<HTMLElement | null>(null);

  return (
    <Portal>
      <Box zIndex="popover" w="full" h="full" position="relative">
        <PopoverContent
          backgroundColor="white"
          borderRadius="sm"
          paddingY="2xl"
          shadow="xs"
          w="6xl"
          ref={popoverContentRef}
        >
          <PopoverHeader paddingX="2xl">
            {header ?? (
              <FilterHeading
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
            marginTop="2xl"
            marginBottom={showCallToActionButton ? '2xl' : '0'}
            maxH="6xl"
            overflowY="scroll"
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
