import {
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  useDisclosure,
} from '@chakra-ui/react';
import Flex from '../flex';
import Text from '../text';
import Link from '../link';
import Button from '../button';
import React, { FC, ReactNode } from 'react';
import { Language, useI18n } from '@smg-automotive/i18n-pkg';

export type PopoverProps = {
  applyButton: {
    // if primary search button is shown
    label: string;
    onClick: () => void;
  };

  // events
  filter: ReactNode; // used to pass the UI for the filter
  isApplied: boolean; //to know if a filter is applied or not (keeping the component independent) - for styling and primary/secondary button switch
  label: string; // used for placeholder in default state and for the value if a filter is applied
  onClose: () => void;
  onResetFilter: () => void;
};

const Popover: FC<PopoverProps> = ({
  applyButton,
  filter,
  isApplied,
  label,
  onClose,
  onResetFilter,
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
          <Text textStyle="heading3">{label}</Text>
          <PopoverCloseButton />
        </Flex>
        <Link as="button" onClick={onResetFilter} disabled={!isApplied}>
          {t('filterSelectButton.reset')}
        </Link>
      </PopoverHeader>
      <PopoverBody>{filter}</PopoverBody>
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
