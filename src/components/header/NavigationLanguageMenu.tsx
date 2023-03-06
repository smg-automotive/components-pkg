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
        offset={[-100, 18]} // TODO responsive missing
        items={[
          { text: 'Deutsch', onClick: () => null },
          { text: 'Français', onClick: () => null },
          { text: 'Italiano', onClick: () => null },
          { text: 'English', onClick: () => null },
        ]}
      ></Box>
    </Hide>
  );
};
