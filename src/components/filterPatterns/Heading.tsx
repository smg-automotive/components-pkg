import React, { FC, RefObject } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import { chakra, IconButton } from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
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

const FilterHeadingContent: FC<Props> = ({
  onClose,
  Icon,
  isApplied,
  label,
  numberOfAppliedFilters,
  onResetFilter,
  contentRef,
}) => {
  const { t } = useI18n();
  return (
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
  );
};
export const FilterHeading: FC<Props> = ({ language, ...rest }) => {
  return (
    <TranslationProvider language={language} scopes={['filterSelectButton']}>
      <FilterHeadingContent language={language} {...rest} />
    </TranslationProvider>
  );
};
