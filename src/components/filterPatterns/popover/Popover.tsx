import React, { FC } from 'react';
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
  children,
}) => {
  const { language } = useI18n();
  return (
    <Portal>
      <Box zIndex="popover" w="full" h="full" position="relative">
        <PopoverContent
          backgroundColor="white"
          borderRadius="sm"
          padding="2xl"
          shadow="xs"
          w="6xl"
        >
          <PopoverHeader paddingBottom="2xl">
            <FilterHeading
              isApplied={isApplied}
              label={label}
              numberOfAppliedFilters={numberOfAppliedFilters}
              onClose={onClose}
              language={language}
              onResetFilter={onResetFilter}
            />
          </PopoverHeader>
          <PopoverBody
            maxH={
              showCallToActionButton
                ? '6xl'
                : 'calc(var(--chakra-sizes-lg) + var(--chakra-space-2xl))'
            }
            overflowY="scroll"
          >
            {children}
          </PopoverBody>
          {showCallToActionButton ? (
            <PopoverFooter paddingTop="2xl">
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
