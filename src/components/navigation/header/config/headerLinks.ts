import { CustomEvent } from 'src/types/tracking';

import { BreakpointName } from 'src/themes/shared/breakpoints';
import { EntitlementConfig } from 'src/components/navigation/link';

import { NavigationLinkProps } from '../links/NavigationLink';
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
  showUnderMoreLinkBelow?: BreakpointName;
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
  privateAutoScoutSellLinkConfig({ trackEvent }),
  privateMotoScoutSellLinkConfig({ trackEvent }),
  professionalSellLinkConfig({ trackEvent }),
  estimateLinkConfig({ trackEvent }),
  autoScoutAssureLinkConfig({ trackEvent }),
  motoScoutAssureLinkConfig({ trackEvent }),
  electromobilityLinkConfig({ trackEvent }),
  magazineLinkConfig({ trackEvent }),
];
