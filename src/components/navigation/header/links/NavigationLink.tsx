import React, { FC, ReactNode } from 'react';

import { Language, useI18n } from '@smg-automotive/i18n-pkg';

import { Entitlement } from 'src/types/entitlements';
import { BreakpointName } from 'src/themes/shared/breakpoints';
import Link from 'src/components/link';
import Hide from 'src/components/hide';
import Badge from 'src/components/badge';

export interface NavigationLinkProps {
  link?: Record<Language, string>;
  translationKey?: string;
  isNew?: boolean;
  iconRight?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
  leftIcon?: ReactNode;
  hideTextBelow?: BreakpointName;
  requiredEntitlement?: Entitlement;
  missingEntitlementLinkIcon?: ReactNode;
  onClick?: () => void;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  link,
  translationKey,
  isNew,
  fontWeight = 'regular',
  variant = 'navigationLink',
  color = 'gray.900',
  leftIcon,
  missingEntitlementLinkIcon,
  hideTextBelow,
  onClick,
}) => {
  const { t, language } = useI18n();

  return (
    <Link
      href={link && link[language]}
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      leftIcon={leftIcon}
      rightIcon={missingEntitlementLinkIcon}
      onClick={onClick}
    >
      {translationKey && (
        <Hide below={hideTextBelow}>
          {t(translationKey)}
          {isNew ? (
            <Badge variant="navigationLinkBadge" text="New"></Badge>
          ) : null}
        </Hide>
      )}
    </Link>
  );
};

export default NavigationLink;
