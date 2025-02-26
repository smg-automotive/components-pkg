import React, { FC, ReactElement } from 'react';
import {
  Button,
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';

import { FontWeights } from 'src/themes';

import { ChevronDownSmallIcon, ChevronUpSmallIcon } from '../icons';

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
  icon?: ReactElement;
}

const Menu: FC<MenuProps> = ({
  title,
  items,
  fontWeightTitle = 'regular',
  offset = [],
  menuColor,
  icon,
}) => {
  return (
    <ChakraMenu {...(offset.length && { offset })}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            padding={0}
            leftIcon={icon}
            rightIcon={
              isOpen ? <ChevronUpSmallIcon /> : <ChevronDownSmallIcon />
            }
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
        </>
      )}
    </ChakraMenu>
  );
};

export default Menu;
