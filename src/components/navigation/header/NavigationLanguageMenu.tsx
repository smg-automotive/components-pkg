import React, { FC } from 'react';

import { replaceLanguageInUrl } from 'src/utilities/replaceLanguageInUrl';
import Menu from 'src/components/menu';
import Hide from 'src/components/hide';
import Box from 'src/components/box';

interface NavigationLanguageMenuProps {
  activeLanguage: string;
}

export const NavigationLanguageMenu: FC<NavigationLanguageMenuProps> = ({
  activeLanguage,
}) => {
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
          { text: 'Deutsch', onClick: () => replaceLanguageInUrl('de') },
          { text: 'Français', onClick: () => replaceLanguageInUrl('fr') },
          { text: 'Italiano', onClick: () => replaceLanguageInUrl('it') },
        ]}
      ></Box>
    </Hide>
  );
};
