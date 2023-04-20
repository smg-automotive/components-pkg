import React, { FC } from 'react';
import { I18nContext, Language } from '@smg-automotive/i18n-pkg';
import { chakra, IconButton } from '@chakra-ui/react';

import TranslationProvider from 'src/components/translationProvider';
import Text from 'src/components/text';
import Link from 'src/components/link';
import { CloseIcon } from 'src/components/icons';

import Flex from 'src/components/flex';

import { FilterPatternProps } from '../props';

type Props = {
  onClose?: () => void;
  language: Language;
} & Pick<
  FilterPatternProps,
  'isApplied' | 'label' | 'numberOfAppliedFilters' | 'onResetFilter'
>;

const FilterHeading: FC<Props> = ({
  onClose,
  language,
  isApplied,
  label,
  numberOfAppliedFilters,
  onResetFilter,
}) => {
  return (
    <TranslationProvider language={language} scopes={['filterSelectButton']}>
      <I18nContext.Consumer>
        {({ t }) => (
          <>
            <Flex alignItems="start" justifyContent="space-between" w="full">
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
              {onClose ? (
                <IconButton
                  aria-label={t('filterSelectButton.close')}
                  icon={<CloseIcon color="gray.800" />}
                  onClick={onClose}
                />
              ) : null}
            </Flex>
            <Link as="button" disabled={!isApplied} onClick={onResetFilter}>
              {t('filterSelectButton.reset')}
            </Link>
          </>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};

export default FilterHeading;
