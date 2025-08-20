import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { Link, LinkConfig } from 'src/components/navigation/link';

import { shouldShowComparisonLink } from '../ComparisonItem';
import { favoritesLinkConfig } from './user';
import { comparisonLinkConfig } from './comparison';

export type IconItems = 'comparison' | 'favorites';
export type IconItemsConfig = Record<IconItems, LinkConfig | null>;
export type IconItemsLinks = Record<IconItems, Link | null>;

export const iconItems = ({
  comparisonItemIds,
  isLoggedIn,
  trackEvent,
}: {
  comparisonItemIds?: number[] | null;
  isLoggedIn?: boolean;
  trackEvent?: (event: CustomEvent) => void;
}): IconItemsConfig => ({
  comparison: shouldShowComparisonLink(comparisonItemIds)
    ? {
        ...comparisonLinkConfig({ comparisonItemIds }),
        onClick: () =>
          trackEvent?.({
            eventCategory: navigationEventCategory,
            eventAction: 'open_comparison_tool',
            eventLabel: 'icon',
          }),
      }
    : null,
  favorites: isLoggedIn
    ? {
        ...favoritesLinkConfig,
        onClick: () =>
          trackEvent?.({
            eventCategory: navigationEventCategory,
            eventAction: 'open_favorites',
            eventLabel: 'icon',
          }),
      }
    : null,
});
