import React, { FC } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';

import Menu from 'src/components/menu';
import Hide from 'src/components/hide';

interface NavigationLanguageMenuProps {
  activeLanguage: string;
}

export const NavigationLanguageMenu: FC<NavigationLanguageMenuProps> = ({
  activeLanguage,
}) => {
  const replaceLanguage = (language: Language) => {
    const updatedUrl = window.location.href.replace(
      `/${activeLanguage}`,
      `/${language}`,
    );

    window.location.replace(updatedUrl);
  };

  return (
    <Hide below="xs">
      <Menu
        title={activeLanguage.toUpperCase()}
        fontWeightTitle="bold"
        menuColor="gray.900"
        offset={[0, 18]}
        iconSpacing="xs"
        placement="bottom-end"
        items={[
          { text: 'Deutsch', onClick: () => replaceLanguage('de') },
          { text: 'Français', onClick: () => replaceLanguage('fr') },
          { text: 'Italiano', onClick: () => replaceLanguage('it') },
        ]}
      />
    </Hide>
  );
};
