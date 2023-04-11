import React, { FC } from 'react';

import Show from 'src/components/show';
import { ChevronDownSmallIcon } from 'src/components/icons';

export const DrawerIndicator: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Show above="xs">
      <ChevronDownSmallIcon
        {...(isOpen
          ? { transform: 'rotate(180deg)', color: 'blue.700' }
          : null)}
      />
    </Show>
  );
};
