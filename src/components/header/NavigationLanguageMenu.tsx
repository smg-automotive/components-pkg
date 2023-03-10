import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

import Menu from '../menu';
import Hide from '../hide';

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
