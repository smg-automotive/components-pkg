import React, { FC, PropsWithChildren } from 'react';
import {
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from '@chakra-ui/react';

import FilterSelectButtonHeading from './Heading';
import FilterSelectCtaButton from './CtaButton';

// TODO: cleanup props with subcomponents
export type PopoverProps = {
  applyButton: {
    // if primary search button is shown
    label: string;
    onClick: () => void;
  };
  numberOfAppliedFilters?: number;
  isApplied: boolean; //to know if a filter is applied or not (keeping the component independent) - for styling and primary/secondary button switch
  label: string; // used for placeholder in default state and for the value if a filter is applied
  onClose: () => void;
  onResetFilter: () => void;
};

const Popover: FC<PropsWithChildren<PopoverProps>> = ({
  applyButton,
  numberOfAppliedFilters,
  isApplied,
  label,
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
          applyButton={applyButton}
          onClose={onClose}
        />
      </PopoverFooter>
    </PopoverContent>
  );
};

export default Popover;
