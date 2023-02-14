import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { chakra, IconButton } from '@chakra-ui/react';

import Text from '../text';
import Link from '../link';
import { CloseIcon } from '../icons';

import Flex from '../flex';
import { FilterSelectButtonProps } from './props';

type Props = {
  onClose: () => void;
} & Pick<
  FilterSelectButtonProps,
  'isApplied' | 'label' | 'numberOfAppliedFilters' | 'onResetFilter'
>;
const FilterSelectButtonHeading: FC<Props> = ({
  onClose,
  isApplied,
  label,
  numberOfAppliedFilters,
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
