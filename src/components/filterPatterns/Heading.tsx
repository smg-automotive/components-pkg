import React, { FC } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import { chakra, IconButton } from '@chakra-ui/react';

import Text from 'src/components/text';
import Link from 'src/components/link';
import { CloseIcon } from 'src/components/icons';

import Flex from 'src/components/flex';

import { FilterPatternProps } from './props';

type Props = {
  onClose?: () => void;
  language: Language;
} & Pick<
  FilterPatternProps,
  'isApplied' | 'label' | 'numberOfAppliedFilters' | 'onResetFilter'
>;

export const FilterHeading: FC<Props> = ({
  onClose,
  isApplied,
  label,
  numberOfAppliedFilters,
  onResetFilter,
}) => {
  return (
    <>
      <Flex alignItems="start" justifyContent="space-between" w="full">
        <Flex
          alignItems="start"
          as={Text}
          color="gray.900"
          textStyle="heading3"
        >
          <chakra.span wordBreak="break-all">{label}</chakra.span>
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
              ml="sm"
              mr="xl"
              w="sm"
            >
              {numberOfAppliedFilters}
            </chakra.span>
          ) : null}
        </Flex>
        {onClose ? (
          <IconButton
            aria-label={'Schliessen'}
            icon={<CloseIcon color="gray.800" />}
            onClick={onClose}
          />
        ) : null}
      </Flex>
      <Link as="button" disabled={!isApplied} onClick={onResetFilter}>
        Zurücksetzen
      </Link>
    </>
  );
};
