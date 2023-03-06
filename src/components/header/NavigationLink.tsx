import React, { FC, ReactNode } from 'react';

import { Language, useI18n } from '@smg-automotive/i18n-pkg';
import { Badge } from '@chakra-ui/react';

import { BreakpointName } from 'src/themes/shared/breakpoints';

import Link from '../link';
import Hide from '../hide';

export const HeaderLink: FC<{
  link: NavigationLinkProps;
}> = ({ link }) => {
  return (
    <Hide below={link.showUnderMoreLinkBelow}>
      <NavigationLink {...link} fontWeight="bold" />
    </Hide>
  );
};

export interface NavigationLinkProps {
  url: Record<Language, string>;
  translationKey: string;
  isNew?: boolean;
  isVisible?: boolean;
  iconRight?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  url,
  translationKey,
  isNew,
  isVisible = true,
  fontWeight = 'regular',
  variant = 'navigationLink',
  color = 'initial',
}) => {
  const { t, language } = useI18n();
  if (!isVisible) return null;

  return (
    <Link
      href={url[language]}
      variant={variant}
      fontWeight={fontWeight}
      color={color}
    >
      {t(translationKey)}
      {isNew ? <Badge variant="navigationLinkBadge">New</Badge> : null}
    </Link>
  );
};

export default NavigationLink;
