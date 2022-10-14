import React, { FC } from 'react';
import {
  Button,
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';

import { ChevronDownSmallIcon } from '../icons';

interface MenuItem {
  text: string;
  onClick: () => void;
}

export interface MenuProps {
  title: string;
  items: MenuItem[];
}

const Menu: FC<MenuProps> = ({ title, items }) => {
  return (
    <ChakraMenu>
      <MenuButton as={Button} padding={0} rightIcon={<ChevronDownSmallIcon />}>
        {title}
      </MenuButton>
      <MenuList minWidth="4xl">
        {items.map(({ onClick, text }, index) => {
          return (
            <ChakraMenuItem key={`menuItem-${index}`} onClick={onClick}>
              {text}
            </ChakraMenuItem>
          );
        })}
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
