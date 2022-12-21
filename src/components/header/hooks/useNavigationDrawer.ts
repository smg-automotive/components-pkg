import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import {
  DrawerNode,
  DawerNodeItems,
  NavigationLinkNode,
} from '../config/drawerNodeItems';

export const drawerHandlerFactory = ({
  nodeName,
  dawerNodeItems,
  isOpen,
  onOpen,
  onClose,
  drawer,
  setDrawer,
}: {
  nodeName: DrawerNode;
  dawerNodeItems: DawerNodeItems;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  drawer: Drawer;
  setDrawer: React.Dispatch<React.SetStateAction<Drawer>>;
}) => {
  return () => {
    if (!isOpen) {
      setDrawer({
        nodes: dawerNodeItems[nodeName],
        current: nodeName,
      });
      onOpen();
      return;
    }

    if (drawer?.current !== nodeName) {
      onClose();
      // Note: can be wrapped in a set timeout for slideup and down variations
      setDrawer({
        nodes: dawerNodeItems[nodeName],
        current: nodeName,
      });
      onOpen();
      return;
    }

    onClose();
  };
};

type Drawer = {
  nodes: NavigationLinkNode[];
  current: DrawerNode;
} | null;

export const useNavigationDrawer = ({
  dawerNodeItems,
}: {
  dawerNodeItems: DawerNodeItems;
}) => {
  const [drawer, setDrawer] = useState<Drawer>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createDrawerHandler = ({ nodeName }: { nodeName: DrawerNode }) => {
    return drawerHandlerFactory({
      nodeName,
      dawerNodeItems,
      isOpen,
      onOpen,
      onClose,
      drawer,
      setDrawer,
    });
  };

  return { drawer, createDrawerHandler, isOpen, onOpen, onClose };
};
