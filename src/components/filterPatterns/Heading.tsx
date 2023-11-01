import React, { FC, MouseEvent } from 'react';
import { I18nContext, Language } from '@smg-automotive/i18n-pkg';
import { chakra, IconButton } from '@chakra-ui/react';

import TranslationProvider from 'src/components/translationProvider';
import Text from 'src/components/text';
import Link from 'src/components/link';
import { CloseIcon } from 'src/components/icons';

import Flex from 'src/components/flex';

import Count from '../count';
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
                <chakra.span wordBreak="break-all" mr="sm">
                  {label}
                </chakra.span>
                {numberOfAppliedFilters ? (
                  <Count count={numberOfAppliedFilters} />
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
            <Link
              as="button"
              disabled={!isApplied}
              onClick={(event: MouseEvent<HTMLElement>) => {
                event.stopPropagation();
                onResetFilter();
              }}
            >
              {t('filterSelectButton.reset')}
            </Link>
          </>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};
