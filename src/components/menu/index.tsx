import React, { FC, JSX, ReactElement } from 'react';
import {
  Button,
  ButtonProps,
  Menu as ChakraMenu,
  MenuRootProps,
  MenuTriggerProps,
  Portal,
  useSlotRecipe,
} from '@chakra-ui/react';

import { ChevronDownSmallIcon } from '../icons';

interface MenuItem {
  text: JSX.Element | string;
  value: string;
  onClick: () => void;
}

export interface MenuProps {
  title: string | ReactElement;
  items: MenuItem[];
  fontWeightTitle?: MenuTriggerProps['fontWeight'];
  offset?: [number, number];
  menuColor?: MenuTriggerProps['color'];
  showChevron?: boolean;
  icon?: ReactElement;
  iconSpacing?: MenuTriggerProps['gap'];
  placement?: Exclude<MenuRootProps['positioning'], undefined>['placement'];
}

const Menu: FC<MenuProps> = ({
  title,
  items,
  fontWeightTitle = 'regular',
  offset = [],
  menuColor,
  showChevron = true,
  icon,
  iconSpacing,
  placement,
}) => {
  const recipe = useSlotRecipe({ key: 'menu' });
  const styles = recipe();

  return (
    <ChakraMenu.Root
      {...(offset.length && { offset })}
      positioning={{ placement }}
    >
      <ChakraMenu.Context>
        {({ open }) => (
          <>
            <ChakraMenu.Trigger
              as={Button}
              padding="0"
              display="inline-flex"
              gap={iconSpacing}
              fontWeight={fontWeightTitle}
              color={open ? 'blue.700' : menuColor}
            >
              {icon}
              {title}
              {showChevron ? (
                <ChevronDownSmallIcon
                  transition="transform"
                  transform={open ? 'rotate(180deg)' : 'rotate(0deg)'}
                />
              ) : null}
            </ChakraMenu.Trigger>
          </>
        )}
      </ChakraMenu.Context>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content css={styles.content} minWidth="4xl">
            {items.map(({ onClick, text, value }, index) => {
              return (
                <ChakraMenu.Item
                  key={`menuItem-${index}`}
                  value={value}
                  onSelect={onClick}
                  css={styles.item}
                  {...(menuColor && { color: menuColor })}
                >
                  {text}
                </ChakraMenu.Item>
              );
            })}
          </ChakraMenu.Content>
        </ChakraMenu.Positioner>
      </Portal>
    </ChakraMenu.Root>
  );
};

export default Menu;
