import React, { FC } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';

import Menu from 'src/components/menu';
import { GlobeIcon } from 'src/components/icons';
import Hide from 'src/components/hide';
import Box from 'src/components/box';

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
    <Hide below="sm">
      <Box
        as={Menu}
        title={activeLanguage.toUpperCase()}
        fontWeight="bold"
        fontWeightTitle="bold"
        menuColor="gray.900"
        marginTop="-2px"
        offset={[-5, 18]}
        icon={<GlobeIcon />}
        items={[
          { text: 'Deutsch', onClick: () => replaceLanguage('de') },
          { text: 'Français', onClick: () => replaceLanguage('fr') },
          { text: 'Italiano', onClick: () => replaceLanguage('it') },
        ]}
      ></Box>
    </Hide>
  );
};
