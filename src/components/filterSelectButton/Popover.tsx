import React, { FC, PropsWithChildren } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import {
  chakra,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from '@chakra-ui/react';

import Text from '../text';
import Link from '../link';
import Flex from '../flex';
import Button from '../button';

export type PopoverProps = {
  applyButton: {
    // if primary search button is shown
    label: string;
    onClick: () => void;
  };
  numberOfAppliedFilters?: number;

  // events
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
  const { t } = useI18n();

  return (
    <PopoverContent
      backgroundColor="white"
      borderRadius="sm"
      shadow="xs"
      padding="2xl"
      width={{ base: 'full', sm: '320px' }}
    >
      <PopoverHeader paddingBottom="2xl">
        <Flex justifyContent="space-between">
          <Flex
            as={Text}
            textStyle="heading3"
            color="gray.900"
            alignItems="center"
          >
            {label}
            {numberOfAppliedFilters ? (
              <chakra.span
                backgroundColor="brand.primary"
                borderRadius="max"
                w="sm"
                h="sm"
                ml="sm"
                fontSize="sm"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {numberOfAppliedFilters}
              </chakra.span>
            ) : null}
          </Flex>
          <PopoverCloseButton color="gray.800" />
        </Flex>
        <Link as="button" onClick={onResetFilter} disabled={!isApplied}>
          {t('filterSelectButton.reset')}
        </Link>
      </PopoverHeader>
      <PopoverBody>{children}</PopoverBody>
      <PopoverFooter paddingTop="2xl">
        <Button
          variant={isApplied ? 'primary' : 'secondary'}
          onClick={
            isApplied
              ? () => {
                  applyButton.onClick();
                  onClose();
                }
              : onClose
          }
          width="full"
        >
          {isApplied ? applyButton.label : t('filterSelectButton.close')}
        </Button>
      </PopoverFooter>
    </PopoverContent>
  );
};

export default Popover;
