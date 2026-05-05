import React, { FC } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import Text from '@/src/components/text';
import Menu from '@/src/components/menu';
import Hide from '@/src/components/hide';

import Flex from '@/src/components/flex';
import Badge from '@/src/components/badge';

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
            text: (
              <Flex alignItems="center">
                <Text>English</Text>
                <Badge text="NEW" variant="navigationLinkBadge" />
              </Flex>
            ),
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'en' }),
          },
        ]}
      />
    </Hide>
  );
};
