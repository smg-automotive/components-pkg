import React, { FC, ReactNode } from 'react';

import { Language, useI18n } from '@smg-automotive/i18n-pkg';

import { BreakpointName } from 'src/themes/shared/breakpoints';
import Link from 'src/components/link';
import Hide from 'src/components/hide';
import Badge from 'src/components/badge';
import { ShowUnderMoreBreakpoint } from '../config/showUnderMoreConstants';

export interface NavigationLinkProps {
  link?: Record<Language, string>;
  translationKey?: string;
  translationParameters?: Record<string, string | number>;
  isNew?: boolean;
  rightIcon?: ReactNode;
  showUnderMoreLinkBelow?: ShowUnderMoreBreakpoint;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
  leftIcon?: ReactNode;
  hideTextBelow?: BreakpointName;
  missingEntitlementLinkIcon?: ReactNode;
  onClick?: () => void;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  link,
  translationKey,
  translationParameters = {},
  isNew,
  fontWeight = 'regular',
  variant = 'navigationLink',
  color = 'gray.900',
  leftIcon,
  rightIcon,
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
      rightIcon={rightIcon}
      onClick={onClick}
    >
      {translationKey && (
        <Hide below={hideTextBelow}>
          {t(translationKey, translationParameters)}
          {isNew ? (
            <Badge variant="navigationLinkBadge" text="New"></Badge>
          ) : null}
        </Hide>
      )}
    </Link>
  );
};

export default NavigationLink;
