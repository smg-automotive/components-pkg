import React, { FC } from 'react';

import { useMultiStyleConfig } from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
import Box from 'src/components/box';

import { DrawerIndicator } from './drawer/DrawerIndicator';

export const NavigationItem: FC<{
  translationKey: string;
  isOpen: boolean;
  drawerHandler: () => void;
}> = ({ translationKey, drawerHandler, isOpen }) => {
  const { t } = useI18n();
  const linkStyles = useMultiStyleConfig('Link', { variant: 'navigationLink' });

  return (
    <Box
      onClick={drawerHandler}
      __css={linkStyles.link}
      fontWeight="bold"
      color={isOpen ? 'blue.700' : 'gray.900'}
      position="relative"
      top="1px"
    >
      {t(translationKey)} <DrawerIndicator isOpen={isOpen} />
    </Box>
  );
};
