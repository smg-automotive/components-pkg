import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import { LinkInstance } from './config/factory';
import Text from '../text';
import { default as ComponentsLink } from '../link';

interface FooterLinkProps {
  linkInstance: LinkInstance;
}
const FooterLink: FC<FooterLinkProps> = ({ linkInstance }) => {
  const { t, language } = useI18n();

  if (!linkInstance.link?.[language]) {
    return <Text>{t(linkInstance.translationKey)}</Text>;
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
    >
      {t(linkInstance.translationKey)}
    </ComponentsLink>
  );
};

export default FooterLink;
