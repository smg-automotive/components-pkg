import { CustomEvent, navigationEventCategory } from 'src/types/tracking';
import { LinkConfig } from 'src/components/navigation/link';

import { getComparisonUrl, shouldShowComparisonLink } from '../ComparisonItem';
import { NavigationLinkConfigProps } from './headerLinks';

export const comparisonLinkConfig = ({
  comparisonItemIds,
}: {
  comparisonItemIds: number[];
}) => {
  return {
    translationKey: 'header.searchMenu.comparison',
    translationParameters: {
      numberOfItems: comparisonItemIds.length,
    },
    link: {
      de: `/de/${getComparisonUrl(comparisonItemIds)}`,
      en: `/en/${getComparisonUrl(comparisonItemIds)}`,
      fr: `/fr/${getComparisonUrl(comparisonItemIds)}`,
      it: `/it/${getComparisonUrl(comparisonItemIds)}`,
    },
    visibilitySettings: {
      userType: {
        guest: true,
        private: true,
        professional: true,
      },
      brand: {
        autoscout24: true,
        motoscout24: true,
      },
    },
    projectIdentifier: 'listings-web',
  } satisfies LinkConfig;
};

export const getComparisonNodeItem = ({
  comparisonItemIds,
  trackEvent,
  eventLabel,
}: {
  comparisonItemIds?: number[] | null;
  trackEvent?: (event: CustomEvent) => void;
  eventLabel: string;
}): NavigationLinkConfigProps[] => {
  return shouldShowComparisonLink(comparisonItemIds)
    ? [
        {
          ...comparisonLinkConfig({ comparisonItemIds }),
          onClick: () =>
            trackEvent?.({
              eventCategory: navigationEventCategory,
              eventAction: 'open_comparison_tool',
              eventLabel,
            }),
        },
      ]
    : [];
};
