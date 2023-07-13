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
          <PopoverHeader>
            {header ? (
              header
            ) : (
              <FilterHeading
                isApplied={isApplied}
                label={label}
                numberOfAppliedFilters={numberOfAppliedFilters}
                onClose={onClose}
                language={language}
                onResetFilter={onResetFilter}
              />
            )}
          </PopoverHeader>
          <PopoverBody
            marginY="2xl"
            maxH={
              showCallToActionButton
                ? '6xl'
                : 'calc(var(--chakra-sizes-lg) + var(--chakra-sizes-6xl))'
            }
            overflowY="scroll"
          >
            {children}
          </PopoverBody>
          {showCallToActionButton ? (
            <PopoverFooter>
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
