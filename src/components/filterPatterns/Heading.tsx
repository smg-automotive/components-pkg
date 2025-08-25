import React, { FC, RefObject } from 'react';
import { I18nContext, Language } from '@smg-automotive/i18n-pkg';
import { chakra, IconButton } from '@chakra-ui/react';

import TranslationProvider from 'src/components/translationProvider';
import Text from 'src/components/text';
import Link from 'src/components/link';
import { CloseIcon } from 'src/components/icons';

import Flex from 'src/components/flex';

import Count from '../count';
import { FilterPatternProps } from './props';

export type Props = {
  onClose?: () => void;
  language: Language;
  contentRef?: RefObject<HTMLElement | null>;
} & Pick<
  FilterPatternProps,
  'Icon' | 'isApplied' | 'label' | 'numberOfAppliedFilters' | 'onResetFilter'
>;

export const FilterHeading: FC<Props> = ({
  onClose,
  language,
  Icon,
  isApplied,
  label,
  numberOfAppliedFilters,
  onResetFilter,
  contentRef,
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
                {Icon ? <Icon h="sm" w="sm" mr="sm" /> : null}
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
              onClick={() => {
                onResetFilter('filter');
                contentRef?.current?.focus();
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
