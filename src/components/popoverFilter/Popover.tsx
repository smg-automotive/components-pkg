import React, { FC } from 'react';
import {
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from '@chakra-ui/react';

import { PopoverFilterProps } from './props';
import FilterHeading from './Heading';
import FilterActionButton from './ActionButton';

type Props = {
  onClose: () => void;
} & Pick<
  PopoverFilterProps,
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
        <FilterHeading
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
        <FilterActionButton
          actionButton={actionButton}
          isApplied={isApplied}
          onClose={onClose}
        />
      </PopoverFooter>
    </PopoverContent>
  );
};

export default Popover;
