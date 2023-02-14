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
      shadow="xs"
      padding="2xl"
      width="320px"
    >
      <PopoverHeader paddingBottom="2xl">
        <FilterSelectButtonHeading
          onResetFilter={onResetFilter}
          label={label}
          numberOfAppliedFilters={numberOfAppliedFilters}
          isApplied={isApplied}
          onClose={onClose}
        />
      </PopoverHeader>
      <PopoverBody>{children}</PopoverBody>
      <PopoverFooter paddingTop="2xl">
        <FilterSelectCtaButton
          isApplied={isApplied}
          actionButton={actionButton}
          onClose={onClose}
        />
      </PopoverFooter>
    </PopoverContent>
  );
};

export default Popover;
