import React, { FC } from 'react';
import {
  Button,
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';

import { FontWeights } from 'src/themes';

import { ChevronDownSmallIcon } from '../icons';

interface MenuItem {
  text: string;
  onClick: () => void;
}

export interface MenuProps {
  title: string;
  items: MenuItem[];
  fontWeightTitle?: FontWeights;
}

const Menu: FC<MenuProps> = ({ title, items, fontWeightTitle = 'regular' }) => {
  return (
    <ChakraMenu>
      <MenuButton
        as={Button}
        padding={0}
        rightIcon={<ChevronDownSmallIcon />}
        fontWeight={fontWeightTitle}
      >
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
