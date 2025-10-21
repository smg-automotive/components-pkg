import React, { FC, PropsWithChildren } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import { Text } from 'src/components/text';
import { LinkInstance } from 'src/components/navigation/link';
import { Link } from 'src/components/link';

interface FooterLinkProps {
  linkInstance: LinkInstance;
  bold?: boolean;
}
export const FooterLink: FC<PropsWithChildren<FooterLinkProps>> = ({
  linkInstance,
  children,
  bold = false,
}) => {
  const { t, language } = useI18n();

  if (!linkInstance) {
    return null;
  }

  if (!linkInstance.link?.[language] && !linkInstance.onClick) {
    return (
      <Text fontWeight={bold ? 'bold' : 'regular'}>
        {linkInstance.translationKey && t(linkInstance.translationKey)}
      </Text>
    );
  }

  if (linkInstance.onClick) {
    return (
      <Link
        type="button"
        as="button"
        variant="footerLink"
        textStyle="body-small"
        fontWeight={bold ? 'bold' : 'regular'}
        onClick={linkInstance.onClick}
      >
        {linkInstance.translationKey && t(linkInstance.translationKey)}
      </Link>
    );
  }

  const targetSettings = linkInstance.target
    ? {
        target: linkInstance.target,
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Link
      href={linkInstance.link?.[language]}
      variant="footerLink"
      textStyle="body-small"
      fontWeight={bold ? 'bold' : 'regular'}
      {...targetSettings}
    >
      {children
        ? children
        : linkInstance.translationKey && t(linkInstance.translationKey)}
    </Link>
  );
};
