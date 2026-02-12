import React, { FC } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import { Menu } from 'src/components/menu';
import { Box } from 'src/components/box';

import { replaceLanguage } from './replaceLanguage';

interface NavigationLanguageMenuProps {
  activeLanguage: Language;
}

export const NavigationLanguageMenu: FC<NavigationLanguageMenuProps> = ({
  activeLanguage,
}) => {
  return (
    <Box hideBelow="sm">
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
            value: 'de',
          },
          {
            text: 'Français',
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'fr' }),
            value: 'fr',
          },
          {
            text: 'Italiano',
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'it' }),
            value: 'it',
          },
        ]}
      />
    </Box>
  );
};
