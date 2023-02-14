import React, { FC, PropsWithChildren } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import Text from '../text';
import { default as ComponentsLink } from '../link';
import { LinkInstance } from './config/factory';

interface FooterLinkProps {
  linkInstance: LinkInstance;
  bold?: boolean;
}
const FooterLink: FC<PropsWithChildren<FooterLinkProps>> = ({
  linkInstance,
  children,
  bold = false,
}) => {
  const { t, language } = useI18n();

  const boldStyles = bold
    ? {
        fontWeight: 'bold',
      }
    : {};

  if (!linkInstance.link?.[language] && !linkInstance.onClick) {
    return <Text {...boldStyles}>{t(linkInstance.translationKey)}</Text>;
  }

  if (linkInstance.onClick) {
    return (
      <ComponentsLink
        type="button"
        as="button"
        color="white"
        textStyle="body-small"
        onClick={linkInstance.onClick}
        {...boldStyles}
      >
        {t(linkInstance.translationKey)}
      </ComponentsLink>
    );
  }

  const targetSettings = linkInstance.target
    ? {
        target: linkInstance.target,
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <ComponentsLink
      href={linkInstance.link?.[language]}
      color="white"
      textStyle="body-small"
      {...targetSettings}
      {...boldStyles}
    >
      {children ? children : t(linkInstance.translationKey)}
    </ComponentsLink>
  );
};

export default FooterLink;
