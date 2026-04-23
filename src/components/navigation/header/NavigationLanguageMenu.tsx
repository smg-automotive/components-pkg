import React, { FC } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import { Text } from '@/src/components/text';
import { Menu } from '@/src/components/menu';

import { Flex } from '@/src/components/flex';
import { Box } from '@/src/components/box';
import { Badge } from '@/src/components/badge';

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
        offset={{
          mainAxis: 8,
          crossAxis: 0,
        }}
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
          {
            text: (
              <Flex alignItems="center">
                <Text>English</Text>
                <Badge text="NEW" variant="navigationLinkBadge" />
              </Flex>
            ),
            onClick: () =>
              replaceLanguage({ activeLanguage, newLanguage: 'en' }),
            value: 'en',
          },
        ]}
      />
    </Box>
  );
};
