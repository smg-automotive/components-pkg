import { CustomEvent } from 'src/types/tracking';

import { EntitlementConfig } from 'src/components/navigation/link';

import { NavigationLinkProps } from '../links/NavigationLink';
import {
  assure,
  electromobility,
  estimate,
  magazine,
  sell,
  ShowUnderMoreBreakpoint,
} from './showUnderMoreConstants';
import {
  privateAutoScoutSellLinkConfig,
  privateMotoScoutSellLinkConfig,
  professionalSellLinkConfig,
} from './sell';
import { magazineLinkConfig } from './magazine';
import { estimateLinkConfig } from './estimate';
import { electromobilityLinkConfig } from './electroMobility';
import { autoScoutAssureLinkConfig, motoScoutAssureLinkConfig } from './assure';

export type NavigationLinkConfigProps = Omit<
  NavigationLinkProps,
  'isVisible'
> & {
  showUnderMoreLinkBelow?: ShowUnderMoreBreakpoint;
  color?: string;
  visibilitySettings: {
    userType: {
      private: boolean;
      professional: boolean;
      guest?: boolean;
    };
    brand: {
      autoscout24: boolean;
      motoscout24: boolean;
    };
  };
  isInternal?: boolean;
  forceMotoscoutLink?: boolean;
  forceAutoscoutLink?: boolean;
  entitlementConfig?: EntitlementConfig;
  tracking?: CustomEvent;
};

export const headerLinks = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}): NavigationLinkConfigProps[] => [
  {
    ...privateAutoScoutSellLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: sell,
  },
  {
    ...privateMotoScoutSellLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: sell,
  },
  {
    ...professionalSellLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: sell,
  },
  {
    ...estimateLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: estimate,
  },
  {
    ...autoScoutAssureLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: assure,
  },
  {
    ...motoScoutAssureLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: assure,
  },
  {
    ...electromobilityLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: electromobility,
  },
  {
    ...magazineLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: magazine,
  },
];
