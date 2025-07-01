import React, { FC, ReactElement } from 'react';
import {
  Button,
  ButtonProps,
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  MenuListProps as ChakraMenuListProps,
  MenuProps as ChakraMenuProps,
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
  menuButtonColor?: string;
  menuItemColor?: string;
  menuListWidth?: ChakraMenuListProps['width'];
  /** @deprecated Use leftIcon instead. Will be removed in future versions. */
  icon?: ReactElement;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement | null;
  iconSpacing?: ButtonProps['iconSpacing'];
  placement?: ChakraMenuProps['placement'];
}

const Menu: FC<MenuProps> = ({
  title,
  items,
  fontWeightTitle = 'regular',
  offset = [],
  menuColor,
  menuButtonColor,
  menuItemColor,
  menuListWidth,
  icon,
  leftIcon,
  rightIcon,
  iconSpacing,
  placement,
}) => {
  const resolvedLeftIcon = leftIcon || icon;
  const shouldHideRightIcon = rightIcon === null;

  const resolvedMenuButtonColor = menuButtonColor || menuColor;
  const resolvedMenuItemColor = menuItemColor || menuColor;

  return (
    <ChakraMenu {...(offset.length && { offset })} placement={placement}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            padding={0}
            iconSpacing={iconSpacing}
            leftIcon={resolvedLeftIcon}
            rightIcon={
              shouldHideRightIcon
                ? undefined
                : rightIcon || (
                    <ChevronDownSmallIcon
                      transition="0.2s"
                      transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                    />
                  )
            }
            fontWeight={fontWeightTitle}
            color={isOpen ? 'blue.700' : resolvedMenuButtonColor}
          >
            {title}
          </MenuButton>
          <MenuList
            {...(menuListWidth && { width: menuListWidth })}
            minWidth="4xl"
          >
            {items.map(({ onClick, text }, index) => {
              return (
                <ChakraMenuItem
                  key={`menuItem-${index}`}
                  onClick={onClick}
                  {...(resolvedMenuItemColor && {
                    color: resolvedMenuItemColor,
                  })}
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
