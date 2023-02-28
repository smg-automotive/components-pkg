import React from 'react';
import { Box } from '@chakra-ui/react';

import Menu from '../menu';

export const NavigationLanguageMenu = () => {
  return (
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
  );
};
