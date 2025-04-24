import { ReactNode } from 'react';

import { Auth0UserType } from '@smg-automotive/auth';

import { Project } from 'src/types/project';
import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { BreakpointName } from 'src/themes/shared/breakpoints';
import { Domains, Link, LinkConfig } from 'src/components/navigation/link';

import { UserTypeExternal } from '../types';

export class HeaderNavigationLink extends Link {
  isNew?: boolean;
  iconRight?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
  userAvatar?: ReactNode;

  constructor({
    config,
    brand,
    userType,
    environment,
    useAbsoluteUrls,
    project,
    linkProtocol,
    domains,
    isNew,
    rightIcon,
    showUnderMoreLinkBelow,
    fontWeight,
    variant,
    color,
    userAvatar,
    forceMotoscoutLink = false,
    forceAutoscoutLink = false,
    userEntitlements = [],
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserTypeExternal.Guest | Auth0UserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    project?: Project;
    linkProtocol: string;
    domains: Domains;
    isNew?: boolean;
    rightIcon?: ReactNode;
    showUnderMoreLinkBelow?: BreakpointName;
    fontWeight?: 'regular' | 'bold';
    variant?: 'navigationLink' | 'subNavigationLink';
    color?: string;
    userAvatar?: ReactNode;
    forceMotoscoutLink?: boolean;
    forceAutoscoutLink?: boolean;
    userEntitlements?: string[];
  }) {
    super({
      config,
      brand,
      userType,
      environment,
      useAbsoluteUrls,
      project,
      linkProtocol,
      domains,
      forceMotoscoutLink,
      forceAutoscoutLink,
      userEntitlements,
      rightIcon,
    });
    this.isNew = isNew;
    this.showUnderMoreLinkBelow = showUnderMoreLinkBelow;
    this.fontWeight = fontWeight;
    this.variant = variant;
    this.color = color;
    this.forceAutoscoutLink = forceAutoscoutLink;
    this.forceMotoscoutLink = forceMotoscoutLink;
    this.userAvatar = userAvatar;
  }
}
