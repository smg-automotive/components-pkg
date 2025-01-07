import { ReactNode } from 'react';

import { MappedUserType } from '@smg-automotive/auth';

import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { BreakpointName } from 'src/themes/shared/breakpoints';
import { Domains, Link, LinkConfig } from 'src/components/navigation/link';

import { UserTypeExternal } from '../types';
import { Project } from '../../../../types/project';

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
    isInternal = false,
    forceMotoscoutLink = false,
    forceAutoscoutLink = false,
    userEntitlements = [],
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserTypeExternal.Guest | MappedUserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    project: Project;
    linkProtocol: string;
    domains: Domains;
    isNew?: boolean;
    rightIcon?: ReactNode;
    showUnderMoreLinkBelow?: BreakpointName;
    fontWeight?: 'regular' | 'bold';
    variant?: 'navigationLink' | 'subNavigationLink';
    color?: string;
    userAvatar?: ReactNode;
    isInternal?: boolean;
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
      isInternal,
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
    this.isInternal = isInternal;
    this.forceAutoscoutLink = forceAutoscoutLink;
    this.forceMotoscoutLink = forceMotoscoutLink;
    this.userAvatar = userAvatar;
  }
}
