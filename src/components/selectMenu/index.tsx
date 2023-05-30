import React, { FC } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';

import { FontWeights } from 'src/themes';

import { ChevronDownSmallIcon, ChevronUpSmallIcon } from '../icons';

interface MenuOption {
  key: string;
  label: string;
  onClick: () => void;
}

export interface SelectMenuProps {
  title: string | JSX.Element;
  value: string;
  options: MenuOption[];
  fontWeightTitle?: FontWeights;
  offset?: [number, number];
  menuColor?: string;
  menuOptionColor?: string;
  type?: 'radio' | 'checkbox';
}

const SelectMenu: FC<SelectMenuProps> = ({
  title,
  value,
  options,
  fontWeightTitle = 'regular',
  offset = [],
  menuColor,
  menuOptionColor,
  type = 'radio',
}) => {
  return (
    <Menu {...(offset.length && { offset })}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            padding={0}
            rightIcon={
              isOpen ? <ChevronUpSmallIcon /> : <ChevronDownSmallIcon />
            }
            fontWeight={fontWeightTitle}
            {...(menuColor && { color: menuColor })}
          >
            {title}
          </MenuButton>
          <MenuList minWidth="4xl">
            <MenuOptionGroup
              {...(type === 'radio' && { defaultValue: value })}
              type={type}
            >
              {options.map(({ key, label, onClick }) => (
                <MenuItemOption
                  key={key}
                  value={key}
                  onClick={onClick}
                  {...(menuOptionColor && {
                    color: menuOptionColor,
                  })}
                >
                  {label}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SelectMenu;
