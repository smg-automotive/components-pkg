import React, { FC, ReactNode } from 'react';

import { Language, useI18n } from '@smg-automotive/i18n-pkg';

import { Project } from 'src/types/project';
import { BreakpointName } from 'src/themes/shared/breakpoints';
import { Link } from 'src/components/link';
import { Box } from 'src/components/box';
import { Badge } from 'src/components/badge';

export interface NavigationLinkProps {
  link?: Record<Language, string>;
  title?: string;
  translationKey?: string;
  translationParameters?: Record<string, string | number>;
  isNew?: boolean;
  rightIcon?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
  leftIcon?: ReactNode;
  hideTextBelow?: BreakpointName;
  missingEntitlementLinkIcon?: ReactNode;
  onClick?: () => void;
  projectIdentifier?: Project;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  link,
  title,
  translationKey,
  translationParameters = {},
  isNew,
  fontWeight = 'regular',
  variant = 'navigationLink',
  color,
  leftIcon,
  rightIcon,
  hideTextBelow,
  onClick,
}) => {
  const { t, language } = useI18n();
  const linkColor = color || 'gray.900';
  const hoverStyle =
    variant === 'navigationLink' ? ({ color: 'blue.700' } as const) : undefined;

  return (
    <Link
      href={link && link[language]}
      variant={variant}
      fontWeight={fontWeight}
      css={{ color: linkColor }}
      _hover={hoverStyle}
      onClick={onClick}
      display="flex"
      alignItems="center"
      gap="xs"
    >
      {leftIcon}
      {(translationKey || title) && (
        <Box hideBelow={hideTextBelow}>
          {translationKey ? t(translationKey, translationParameters) : title}
          {isNew ? <Badge variant="navigationLinkBadge" text="New" /> : null}
        </Box>
      )}
      {rightIcon}
    </Link>
  );
};
