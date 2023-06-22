import { ReactNode } from 'react';

import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { BreakpointName } from 'src/themes/shared/breakpoints';

import { Link, LinkConfig } from 'src/components/navigation/link';

import { UserType } from '..';

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
    linkProtocol,
    domains,
    isNew,
    iconRight,
    showUnderMoreLinkBelow,
    fontWeight,
    variant,
    color,
    userAvatar,
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains: Record<Brand, Record<Environment, string>>;
    isNew?: boolean;
    iconRight?: ReactNode;
    showUnderMoreLinkBelow?: BreakpointName;
    fontWeight?: 'regular' | 'bold';
    variant?: 'navigationLink' | 'subNavigationLink';
    color?: string;
    userAvatar?: ReactNode;
  }) {
    super({
      config,
      brand,
      userType,
      environment,
      useAbsoluteUrls,
      linkProtocol,
      domains,
    });
    this.isNew = isNew;
    this.iconRight = iconRight;
    this.showUnderMoreLinkBelow = showUnderMoreLinkBelow;
    this.fontWeight = fontWeight;
    this.variant = variant;
    this.color = color;
    this.userAvatar = userAvatar;
  }
}
