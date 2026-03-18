import React, { FC } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import Menu from 'src/components/menu';
import Hide from 'src/components/hide';

import { replaceLanguage } from './replaceLanguage';

interface NavigationLanguageMenuProps {
  activeLanguage: Language;
}

export const NavigationLanguageMenu: FC<NavigationLanguageMenuProps> = ({
  activeLanguage,
}) => {
  return (
    <Hide below="sm">
      <Menu
        title={activeLanguage.toUpperCase()}
        fontWeightTitle="bold"
        menuColor="gray.900"
        offset={[0, 18]}
        iconSpacing="xs"
        placement="bottom-end"
        items={[
          {
            text: 'Deutsch',
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'de' }),
          },
          {
            text: 'Français',
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'fr' }),
          },
          {
            text: 'Italiano',
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'it' }),
          },
          {
            text: 'English',
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'en' }),
          },
        ]}
      />
    </Hide>
  );
};
