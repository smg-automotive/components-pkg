import React from 'react';
import { Box } from '@chakra-ui/react';

import Menu from '../menu';
import Hide from '../hide';

export const NavigationLanguageMenu = () => {
  return (
    <Hide below="sm">
      <Box
        as={Menu}
        title="DE"
        fontWeight="bold"
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
