import React, { FC } from 'react';

import { useSlotRecipe } from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
import { Box } from 'src/components/box';

import { DrawerIndicator } from './drawer/DrawerIndicator';

export const NavigationItem: FC<{
  translationKey: string;
  isOpen: boolean;
  drawerHandler: () => void;
}> = ({ translationKey, drawerHandler, isOpen }) => {
  const { t } = useI18n();
  const recipe = useSlotRecipe({ key: 'link' });
  const styles = recipe({ variant: 'navigationLink' });

  return (
    <Box
      onClick={drawerHandler}
      css={{
        ...styles.root,
      }}
      fontWeight="bold"
      color={isOpen ? 'blue.700' : 'gray.900'}
      _hover={{ color: 'blue.700' }}
      position="relative"
      cursor="pointer"
      display="flex"
      alignItems="center"
    >
      {t(translationKey)} <DrawerIndicator isOpen={isOpen} />
    </Box>
  );
};
