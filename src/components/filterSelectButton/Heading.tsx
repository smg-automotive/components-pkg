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
      <Flex alignItems="start" justifyContent="space-between">
        <Flex
          alignItems="start"
          as={Text}
          color="gray.900"
          textStyle="heading3"
        >
          {label}
          {numberOfAppliedFilters ? (
            <chakra.span
              alignItems="center"
              backgroundColor="brand.primary"
              borderRadius="max"
              display="flex"
              fontSize="sm"
              h="sm"
              justifyContent="center"
              minW="sm"
              mx="sm"
              w="sm"
            >
              {numberOfAppliedFilters}
            </chakra.span>
          ) : null}
        </Flex>
        <IconButton
          aria-label={t('filterSelectButton.close')}
          icon={<CloseIcon color="gray.800" />}
          onClick={onClose}
        />
      </Flex>
      <Link as="button" disabled={!isApplied} onClick={onResetFilter}>
        {t('filterSelectButton.reset')}
      </Link>
    </>
  );
};

export default FilterSelectButtonHeading;
