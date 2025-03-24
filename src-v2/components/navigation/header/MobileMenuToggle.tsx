import React, { FC } from 'react';

import Show from 'src/components/show';
import { CloseIcon, HamburgerMenuIcon } from 'src/components/icons';
import Box from 'src/components/box';

import { DrawerNode } from './config/DrawerNodeItems';

type Props = {
  isOpen: boolean;
  createDrawerHandler: (args: { nodeName: DrawerNode }) => () => void;
};

const MobileHeaderMenuToggle: FC<Props> = ({ isOpen, createDrawerHandler }) => {
  const mobileDrawerHandler = createDrawerHandler({
    nodeName: DrawerNode.Combined,
  });

  return (
    <Show below="sm">
      <Box
        as="button"
        onClick={mobileDrawerHandler}
        color={isOpen ? 'blue.700' : 'gray.900'}
      >
        {isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </Box>
    </Show>
  );
};

export default MobileHeaderMenuToggle;
