import React, { FC } from 'react';

import { Box, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';
import Show from '../show';
import { ChevronDownSmallIcon } from '../icons';
import logoMS from '../../assets/images/logo_ms24.svg';
import logoAS from '../../assets/images/logo_as24.svg';
import { HeaderLink, NavigationLinkProps } from './NavigationLink';
import { DrawerNode } from './config/drawerNodeItems';

import { Plattform } from '.';

interface NavigationItemsProps {
  plattform: Plattform;
  headerLinks: NavigationLinkProps[];
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
}

export const NavigationItems: FC<NavigationItemsProps> = ({
  plattform,
  headerLinks,
  createDrawerHandler,
}) => {
  const linkStyles = useMultiStyleConfig('Link', { variant: 'navigationLink' });
  const logo = plattform === 'as24' ? logoAS : logoMS;
  return (
    <Stack direction="row" spacing="2xl" align="center">
      <img width="144px" height="34px" src={logo} />
      {/* TODO: replace logo quality */}
      {/* extract navigation links to separate component */}
      <Box
        onClick={createDrawerHandler({
          nodeName: 'search',
        })}
        __css={linkStyles.link}
        fontWeight="bold"
      >
        Suche <ChevronDownSmallIcon />
      </Box>
      {headerLinks.map((link, index) => (
        <HeaderLink key={`link-${index}`} link={link} />
      ))}
      <Show below="lg">
        <Box
          onClick={createDrawerHandler({
            nodeName: 'more',
          })}
          __css={linkStyles.link}
          fontWeight="bold"
        >
          Mehr <ChevronDownSmallIcon />
        </Box>
      </Show>
    </Stack>
  );
};
