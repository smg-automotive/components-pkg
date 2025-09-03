import React, { FC, JSX } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';

import { FontWeights } from 'src/themes';

import { ChevronDownSmallIcon } from '../icons';

interface MenuOption {
  value: string;
  label: string;
  onClick?: () => void;
}

export interface SelectMenuProps {
  title: string | JSX.Element;
  value: string;
  options: MenuOption[];
  fontWeightTitle?: FontWeights;
  offset?: [number, number];
  menuColor?: string;
  menuOptionColor?: string;
  onChange?: (val: string | string[]) => void;
  leftIcon?: JSX.Element;
  withIndicator?: boolean;
}

const SelectMenu: FC<SelectMenuProps> = ({
  title,
  value,
  options,
  fontWeightTitle = 'regular',
  offset = [],
  menuColor,
  menuOptionColor,
  onChange = () => null,
  withIndicator = true,
  leftIcon,
}) => {
  return (
    <Menu {...(offset.length && { offset })}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            padding={0}
            leftIcon={leftIcon}
            rightIcon={
              withIndicator ? (
                <ChevronDownSmallIcon
                  transition="0.2s"
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                />
              ) : undefined
            }
            fontWeight={fontWeightTitle}
            {...(menuColor && { color: menuColor })}
          >
            {title}
          </MenuButton>
          <MenuList minWidth="4xl">
            <MenuOptionGroup value={value} type="radio" onChange={onChange}>
              {options.map(
                ({ value: itemValue, label, onClick = () => null }) => (
                  <MenuItemOption
                    key={itemValue}
                    value={itemValue}
                    onClick={onClick}
                    {...(menuOptionColor && {
                      color: menuOptionColor,
                    })}
                  >
                    {label}
                  </MenuItemOption>
                ),
              )}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SelectMenu;
