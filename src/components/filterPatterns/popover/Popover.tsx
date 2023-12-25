import React, { FC, useRef } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import {
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  Portal,
} from '@chakra-ui/react';

import ScrollableBox from 'src/components/scrollableBox';
import Box from 'src/components/box';

import { FilterHeading } from '../Heading';
import FilterActionButton from '../ActionButton';
import { PopoverFilterProps } from './props';

type Props = {
  onClose: () => void;
  widthScrollableBox?: string;
} & Pick<
  PopoverFilterProps,
  | 'actionButton'
  | 'isApplied'
  | 'label'
  | 'numberOfAppliedFilters'
  | 'onResetFilter'
  | 'showCallToActionButton'
  | 'header'
  | 'withScrollableBox'
  | 'contentPaddingX'
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
  withScrollableBox,
  contentPaddingX = '2xl',
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
          shadow="md"
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
            sx={{
              '--call-to-action-height':
                'calc(var(--chakra-sizes-lg) + var(--chakra-space-2xl))',
            }}
            marginTop="2xl"
            marginBottom={showCallToActionButton ? '2xl' : '0'}
            maxH={
              showCallToActionButton
                ? '6xl'
                : 'calc(var(--chakra-sizes-6xl) + var(--call-to-action-height))'
            }
            paddingX={withScrollableBox ? 0 : contentPaddingX}
          >
            {withScrollableBox ? (
              <ScrollableBox
                indicatorHeight="sm"
                scrollSpace={contentPaddingX}
                maxH={
                  showCallToActionButton
                    ? '6xl'
                    : 'calc(var(--chakra-sizes-6xl) + var(--call-to-action-height))'
                }
              >
                {children}
              </ScrollableBox>
            ) : (
              children
            )}
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
