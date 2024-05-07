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
  text: JSX.Element | string;
  onClick: () => void;
}

export interface MenuProps {
  title: string;
  items: MenuItem[];
  fontWeightTitle?: FontWeights;
  offset?: [number, number];
  menuColor?: string;
}

const Menu: FC<MenuProps> = ({
  title,
  items,
  fontWeightTitle = 'regular',
  offset = [],
  menuColor,
}) => {
  return (
    <ChakraMenu {...(offset.length && { offset })}>
      <MenuButton
        as={Button}
        padding={0}
        rightIcon={<ChevronDownSmallIcon />}
        fontWeight={fontWeightTitle}
        {...(menuColor && { color: menuColor })}
      >
        {title}
      </MenuButton>
      <MenuList minWidth="4xl">
        {items.map(({ onClick, text }, index) => {
          return (
            <ChakraMenuItem
              key={`menuItem-${index}`}
              onClick={onClick}
              {...(menuColor && { color: menuColor })}
            >
              {text}
            </ChakraMenuItem>
          );
        })}
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
