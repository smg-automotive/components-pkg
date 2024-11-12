import React, { FC, PropsWithChildren } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';

import Text from 'src/components/text';
import { default as ComponentsLink } from 'src/components/link';

import { LinkInstance } from '../link';

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

  if (!linkInstance) {
    return null;
  }

  if (!linkInstance.link?.[language] && !linkInstance.onClick) {
    return (
      <Text {...boldStyles}>
        {linkInstance.translationKey && t(linkInstance.translationKey)}
      </Text>
    );
  }

  if (linkInstance.onClick) {
    return (
      <ComponentsLink
        type="button"
        as="button"
        variant="footerLink"
        textStyle="body-small"
        onClick={linkInstance.onClick}
        {...boldStyles}
      >
        {linkInstance.translationKey && t(linkInstance.translationKey)}
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
      variant="footerLink"
      textStyle="body-small"
      {...targetSettings}
      {...boldStyles}
    >
      {children
        ? children
        : linkInstance.translationKey && t(linkInstance.translationKey)}
    </ComponentsLink>
  );
};

export default FooterLink;
