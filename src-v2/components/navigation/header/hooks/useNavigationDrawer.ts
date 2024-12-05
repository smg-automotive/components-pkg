import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import {
  DrawerNode,
  DrawerNodeItems,
  NavigationLinkNode,
} from '../config/DrawerNodeItems';

export const drawerHandlerFactory = ({
  nodeName,
  drawerNodeItems,
  isOpen,
  onOpen,
  onClose,
  drawer,
  setDrawer,
}: {
  nodeName: DrawerNode;
  drawerNodeItems: DrawerNodeItems;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  drawer: Drawer;
  setDrawer: React.Dispatch<React.SetStateAction<Drawer>>;
}) => {
  return () => {
    if (!isOpen) {
      setDrawer({
        nodes: drawerNodeItems[nodeName],
        current: nodeName,
      });
      onOpen();
      return;
    }

    if (drawer?.current !== nodeName) {
      onClose();
      // Note: can be wrapped in a set timeout for slideup and down variations
      setDrawer({
        nodes: drawerNodeItems[nodeName],
        current: nodeName,
      });
      onOpen();
      return;
    }

    onClose();
  };
};

export type Drawer = {
  nodes: NavigationLinkNode[];
  current: DrawerNode;
} | null;

export const useNavigationDrawer = ({
  drawerNodeItems,
}: {
  drawerNodeItems: DrawerNodeItems;
}) => {
  const [drawer, setDrawer] = useState<Drawer>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createDrawerHandler = ({ nodeName }: { nodeName: DrawerNode }) => {
    return drawerHandlerFactory({
      nodeName,
      drawerNodeItems,
      isOpen,
      onOpen,
      onClose,
      drawer,
      setDrawer,
    });
  };

  return { drawer, createDrawerHandler, isOpen, onOpen, onClose };
};
