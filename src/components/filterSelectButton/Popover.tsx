import React, { FC } from 'react';
import {
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from '@chakra-ui/react';

import { FilterSelectButtonProps } from './props';
import FilterSelectButtonHeading from './Heading';
import FilterSelectCtaButton from './CtaButton';

type Props = {
  onClose: () => void;
} & Pick<
  FilterSelectButtonProps,
  | 'actionButton'
  | 'isApplied'
  | 'label'
  | 'numberOfAppliedFilters'
  | 'onResetFilter'
  | 'children'
>;

const Popover: FC<Props> = ({
  actionButton,
  isApplied,
  label,
  numberOfAppliedFilters,
  onClose,
  onResetFilter,
  children,
}) => {
  return (
    <PopoverContent
      backgroundColor="white"
      borderRadius="sm"
      padding="2xl"
      shadow="xs"
      w="6xl"
    >
      <PopoverHeader paddingBottom="2xl">
        <FilterSelectButtonHeading
          isApplied={isApplied}
          label={label}
          numberOfAppliedFilters={numberOfAppliedFilters}
          onClose={onClose}
          onResetFilter={onResetFilter}
        />
      </PopoverHeader>
      <PopoverBody maxH="6xl" overflowY="scroll">
        {children}
      </PopoverBody>
      <PopoverFooter paddingTop="2xl">
        <FilterSelectCtaButton
          actionButton={actionButton}
          isApplied={isApplied}
          onClose={onClose}
        />
      </PopoverFooter>
    </PopoverContent>
  );
};

export default Popover;
