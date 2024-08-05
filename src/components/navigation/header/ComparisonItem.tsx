import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { chakra } from '@chakra-ui/react';

import { CustomEvent, navigationEventCategory } from 'src/types/tracking';
import { CompareIcon } from 'src/components/icons';
import Count from 'src/components/count';
import Box from 'src/components/box';
import Badge from 'src/components/badge';

export const shouldShowComparisonLink = (
  comparisonItemIds?: number[] | null,
): comparisonItemIds is number[] => {
  return !!comparisonItemIds && Array.isArray(comparisonItemIds);
};

export const getComparisonUrl = (comparisonItemIds: number[]) => {
  const baseUrl = 'comparison';
  if (comparisonItemIds.length === 0) return baseUrl;
  return `${baseUrl}/${comparisonItemIds.join('/')}`;
};

type Props = {
  comparisonItemIds?: number[] | null;
  trackEvent?: (event: CustomEvent) => void;
};

const ComparisonItem: FC<Props> = ({ comparisonItemIds, trackEvent }) => {
  const { t, language } = useI18n();

  return (
    <chakra.a
      position="relative"
      href={`/${language}/${getComparisonUrl(comparisonItemIds ?? [])}`}
      onClick={() =>
        trackEvent?.({
          eventCategory: navigationEventCategory,
          eventAction: 'open_comparison_tool',
        })
      }
      display={
        shouldShowComparisonLink(comparisonItemIds)
          ? { base: 'none', sm: 'block' }
          : 'none'
      }
      aria-label={t('header.searchMenu.comparison')}
    >
      <CompareIcon color="gray.900" />
      <Box position="absolute" top={-10} right={-15}>
        {comparisonItemIds && comparisonItemIds.length > 0 ? (
          <Count count={comparisonItemIds.length} />
        ) : (
          <Badge variant="navigationLinkBadge" text="New" />
        )}
      </Box>
    </chakra.a>
  );
};

export default ComparisonItem;
