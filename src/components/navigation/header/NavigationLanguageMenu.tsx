import React, { FC } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';

import Menu from 'src/components/menu';
import Hide from 'src/components/hide';
import Box from 'src/components/box';

interface NavigationLanguageMenuProps {
  activeLanguage: string;
}

export const NavigationLanguageMenu: FC<NavigationLanguageMenuProps> = ({
  activeLanguage,
}) => {
  const handleClick = (language: Language) => {
    const updatedUrl = window.location.href.replace(
      `/${activeLanguage}`,
      `/${language}`,
    );

    if (updatedUrl) {
      window.location.href = updatedUrl;
    }
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
        offset={[-110, 18]}
        items={[
          { text: 'Deutsche', onClick: () => handleClick('de') },
          { text: 'Français', onClick: () => handleClick('fr') },
          { text: 'Italiana', onClick: () => handleClick('it') },
        ]}
      ></Box>
    </Hide>
  );
};
