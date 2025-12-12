import React, { FC } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';
import { Image } from '@chakra-ui/react';

import { Stack } from 'src/components/stack';
import { Link } from 'src/components/link';
import { Box } from 'src/components/box';
import logoMotoScout24 from 'src/assets/images/logo_ms24.svg';
import logoAutoScout24 from 'src/assets/images/logo_as24.svg';

import { Platform } from './types';
import { NavigationItem } from './NavigationItem';
import { HeaderLink } from './links/HeaderLink';
import { Drawer as UseNavigationDrawer } from './hooks/useNavigationDrawer';
import { HeaderNavigationLink } from './config/headerNavigationLink';
import { DrawerNode } from './config/DrawerNodeItems';

interface NavigationItemsProps {
  platform: Platform;
  headerLinks: HeaderNavigationLink[];
  drawer: UseNavigationDrawer;
  isOpen: boolean;
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
  language: Language;
}

export const NavigationItems: FC<NavigationItemsProps> = ({
  platform,
  headerLinks,
  drawer,
  isOpen,
  createDrawerHandler,
  language,
}) => {
  const logo = platform === 'autoscout24' ? logoAutoScout24 : logoMotoScout24;

  const moreDrawerHandler = createDrawerHandler({
    nodeName: DrawerNode.More,
  });
  const searchDrawerHandler = createDrawerHandler({
    nodeName: DrawerNode.Search,
  });

  return (
    <Stack direction="row" gap={{ base: 'lg', sm: '2xl' }} align="center">
      <Link href={`/${language === 'en' ? 'de' : language}`}>
        <Image
          css={{
            width: { sm: '124px', base: '101px' },
            height: { sm: '30px', base: 'var(--spacing-sm)' },
          }}
          src={logo}
          alt="Platform logo"
        />
      </Link>
      <Box hideBelow="sm">
        <NavigationItem
          translationKey="header.search"
          drawerHandler={searchDrawerHandler}
          isOpen={isOpen && drawer?.current === DrawerNode.Search}
        />
      </Box>
      {headerLinks.map((link, index) => (
        <HeaderLink key={`link-${index}`} link={link} />
      ))}
      {/* on mobile, the items from the more drawer are inside the search drawer */}
      {/* Show "More" only between sm and lg breakpoints */}
      <Box display={{ base: 'none', sm: 'block', lg: 'none' }}>
        <NavigationItem
          translationKey="header.more"
          drawerHandler={moreDrawerHandler}
          isOpen={isOpen && drawer?.current === DrawerNode.More}
        />
      </Box>
    </Stack>
  );
};
