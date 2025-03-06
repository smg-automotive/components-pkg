import React, { FC, ReactElement } from 'react';
import {
  Button,
  ButtonProps,
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  MenuProps as ChakraMenuProps,
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
  iconSpacing?: ButtonProps['iconSpacing'];
  placement?: ChakraMenuProps['placement'];
}

const Menu: FC<MenuProps> = ({
  title,
  items,
  fontWeightTitle = 'regular',
  offset = [],
  menuColor,
  icon,
  iconSpacing,
  placement,
}) => {
  return (
    <ChakraMenu {...(offset.length && { offset })} placement={placement}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            padding={0}
            iconSpacing={iconSpacing}
            leftIcon={icon}
            rightIcon={
              <ChevronDownSmallIcon
                transition="0.2s"
                transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
              />
            }
            fontWeight={fontWeightTitle}
            color={isOpen ? 'blue.700' : menuColor}
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
