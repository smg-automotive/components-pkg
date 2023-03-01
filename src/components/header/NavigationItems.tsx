import React, { FC } from 'react';

import { Box, Image, useMultiStyleConfig } from '@chakra-ui/react';

import logoMS from 'src/assets/images/logo_ms24.svg';
import logoAS from 'src/assets/images/logo_as24.svg';

import Stack from '../stack';
import Show from '../show';
import Link from '../link';

import { HeaderLink, NavigationLinkProps } from './NavigationLink';
import { Drawer as UseNavigationDrawer } from './hooks/useNavigationDrawer';
import { DrawerIndicator } from './drawer/DrawerIndicator';
import { DrawerNode } from './config/drawerNodeItems';

import { Plattform } from '.';

interface NavigationItemsProps {
  plattform: Plattform;
  headerLinks: NavigationLinkProps[];
  drawer: UseNavigationDrawer;
  isOpen: boolean;
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
}

export const NavigationItems: FC<NavigationItemsProps> = ({
  plattform,
  headerLinks,
  drawer,
  isOpen,
  createDrawerHandler,
}) => {
  const logo = plattform === 'as24' ? logoAS : logoMS;

  const moreDrawerHandler = createDrawerHandler({
    nodeName: DrawerNode.More,
  });
  const searchDrawerHandler = createDrawerHandler({
    nodeName: DrawerNode.Search,
  });

  return (
    <Stack direction="row" spacing={{ base: 'lg', sm: '2xl' }} align="center">
      <Link href="/?path=/story/patterns-navigation-header--professional">
        <Image
          width={{ sm: '124px', base: '101px' }}
          height={{ sm: '30px', base: '24px' }}
          src={logo}
        />
      </Link>

      <NavigationItem
        text="Suche"
        drawerHandler={searchDrawerHandler}
        isOpen={isOpen && drawer?.current === DrawerNode.Search}
      />
      {headerLinks.map((link, index) => (
        <HeaderLink key={`link-${index}`} link={link} />
      ))}
      <Show below="lg">
        <NavigationItem
          text="Mehr"
          drawerHandler={moreDrawerHandler}
          isOpen={isOpen && drawer?.current === DrawerNode.More}
        />
      </Show>
    </Stack>
  );
};

const NavigationItem: FC<{
  text: string;
  isOpen: boolean;
  drawerHandler: () => void;
}> = ({ text, drawerHandler, isOpen }) => {
  const linkStyles = useMultiStyleConfig('Link', { variant: 'navigationLink' });
  return (
    <Box
      onClick={drawerHandler}
      __css={linkStyles.link}
      fontWeight="bold"
      {...(isOpen ? { color: 'blue.700' } : null)}
    >
      {text} <DrawerIndicator isOpen={isOpen} />
    </Box>
  );
};
