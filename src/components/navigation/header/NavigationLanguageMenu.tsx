import React, { FC } from 'react';

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
        offset={[-100, 18]}
        items={[
          { text: 'Deutsch', onClick: () => (window.location.href = '/de') },
          { text: 'Français', onClick: () => (window.location.href = '/fr') },
          { text: 'Italiano', onClick: () => (window.location.href = '/it') },
        ]}
      ></Box>
    </Hide>
  );
};
