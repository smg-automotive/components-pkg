import Flex from '../flex';
import Text from '../text';
import { chakra, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '../icons';
import Link from '../link';
import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

type FilterSelectButtonHeadingProps = {
  isApplied: boolean;
  label: string;
  numberOfAppliedFilters?: number;
  onClose: () => void;
  onResetFilter: () => void;
};
const FilterSelectButtonHeading: FC<FilterSelectButtonHeadingProps> = ({
  isApplied,
  label,
  numberOfAppliedFilters,
  onClose,
  onResetFilter,
}) => {
  const { t } = useI18n();

  return (
    <>
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
        <IconButton
          icon={<CloseIcon color="gray.800" />}
          onClick={onClose}
          aria-label="close"
        />
      </Flex>
      <Link as="button" onClick={onResetFilter} disabled={!isApplied}>
        {t('filterSelectButton.reset')}
      </Link>
    </>
  );
};

export default FilterSelectButtonHeading;
