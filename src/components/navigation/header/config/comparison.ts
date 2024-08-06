import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { LinkConfig } from 'src/components/navigation/link';

import { getComparisonUrl } from '../ComparisonItem';

export const comparisonLinkConfig = ({
  comparisonItemIds,
  trackEvent,
}: {
  comparisonItemIds: number[];
  trackEvent?: (event: CustomEvent) => void;
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
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'open_comparison_tool',
      }),
  } satisfies LinkConfig;
};
