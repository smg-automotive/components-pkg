import React, { FC } from 'react';

import { Image } from '@chakra-ui/react';

import logoMotoScout24 from 'src/assets/images/logo_ms24.svg';
import logoAutoScout24 from 'src/assets/images/logo_as24.svg';

import Stack from '../stack';
import Show from '../show';
import Link from '../link';

import { HeaderLink, NavigationLinkProps } from './NavigationLink';
import { NavigationItem } from './NavigationItem';
import { Drawer as UseNavigationDrawer } from './hooks/useNavigationDrawer';
import { DrawerNode } from './config/drawerNodeItems';

import { Platform } from '.';

interface NavigationItemsProps {
  platform: Platform;
  headerLinks: NavigationLinkProps[];
  drawer: UseNavigationDrawer;
  isOpen: boolean;
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
}

export const NavigationItems: FC<NavigationItemsProps> = ({
  platform,
  headerLinks,
  drawer,
  isOpen,
  createDrawerHandler,
}) => {
  const logo = platform === 'as24' ? logoAutoScout24 : logoMotoScout24;

  const moreDrawerHandler = createDrawerHandler({
    nodeName: DrawerNode.More,
  });
  const searchDrawerHandler = createDrawerHandler({
    nodeName: DrawerNode.Search,
  });

  return (
    <Stack direction="row" spacing={{ base: 'lg', sm: '2xl' }} align="center">
      <Link href="/">
        <Image
          width={{ sm: '124px', base: '101px' }}
          height={{ sm: '30px', base: 'sm' }}
          src={logo}
        />
      </Link>
      <NavigationItem
        translationKey="header.search"
        drawerHandler={searchDrawerHandler}
        isOpen={isOpen && drawer?.current === DrawerNode.Search}
      />
      {headerLinks.map((link, index) => (
        <HeaderLink key={`link-${index}`} link={link} />
      ))}
      <Show below="lg">
        <NavigationItem
          translationKey="header.more"
          drawerHandler={moreDrawerHandler}
          isOpen={isOpen && drawer?.current === DrawerNode.More}
        />
      </Show>
    </Stack>
  );
};
