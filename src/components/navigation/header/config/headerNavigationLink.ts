import { ReactNode } from 'react';

import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { BreakpointName } from 'src/themes/shared/breakpoints';

import { Link, LinkConfig } from 'src/components/navigation/link';

import { UserType } from '../types';

export class HeaderNavigationLink extends Link {
  isNew?: boolean;
  iconRight?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
  userAvatar?: ReactNode;
  isInternal?: boolean;

  constructor({
    config,
    brand,
    userType,
    environment,
    useAbsoluteUrls,
    linkProtocol,
    domains,
    isNew,
    rightIcon,
    showUnderMoreLinkBelow,
    fontWeight,
    variant,
    color,
    userAvatar,
    isInternal = false,
    hasEntitlement = false,
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains:
      | Record<Brand, Record<'main', Record<Environment, string>>>
      | Record<
          Brand,
          Record<
            'internal',
            Record<'professional' | 'private', Record<Environment, string>>
          >
        >;
    isNew?: boolean;
    rightIcon?: ReactNode;
    showUnderMoreLinkBelow?: BreakpointName;
    fontWeight?: 'regular' | 'bold';
    variant?: 'navigationLink' | 'subNavigationLink';
    color?: string;
    userAvatar?: ReactNode;
    isInternal?: boolean;
    hasEntitlement?: boolean;
  }) {
    super({
      config,
      brand,
      userType,
      environment,
      useAbsoluteUrls,
      linkProtocol,
      domains,
      isInternal,
      hasEntitlement,
      rightIcon,
    });
    this.isNew = isNew;
    this.showUnderMoreLinkBelow = showUnderMoreLinkBelow;
    this.fontWeight = fontWeight;
    this.variant = variant;
    this.color = color;
    this.userAvatar = userAvatar;
    this.isInternal = isInternal;
  }
}
