import React, { FC, JSX, ReactElement } from 'react';
import {
  Menu as ChakraMenu,
  MenuContentProps,
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
  menuOptionColor?: MenuContentProps['color'];
  showChevron?: boolean;
  icon?: ReactElement;
  iconSpacing?: MenuTriggerProps['gap'];
  placement?: Exclude<MenuRootProps['positioning'], undefined>['placement'];
}

export const Menu: FC<MenuProps> = ({
  title,
  items,
  fontWeightTitle = 'regular',
  offset = [8, 0],
  menuColor,
  menuOptionColor,
  showChevron = true,
  icon,
  iconSpacing = 'sm',
  placement,
}) => {
  const recipe = useSlotRecipe({ key: 'menu' });
  const styles = recipe();
  const [mainAxis = 0, crossAxis = 0] = offset;
  return (
    <ChakraMenu.Root
      positioning={{ placement, offset: { mainAxis, crossAxis } }}
    >
      <ChakraMenu.Context>
        {({ open }) => {
          // menuColor takes precedence over the open state color
          const color = menuColor || (open ? 'blue.700' : undefined);

          return (
            <ChakraMenu.Trigger
              css={styles.trigger}
              gap={iconSpacing}
              fontWeight={fontWeightTitle}
              color={color}
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
          );
        }}
      </ChakraMenu.Context>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content css={styles.content}>
            {items.map(({ onClick, text, value }) => {
              return (
                <ChakraMenu.Item
                  key={`menuItem-${value}`}
                  value={value}
                  onSelect={onClick}
                  css={styles.item}
                  {...(menuOptionColor && { color: menuOptionColor })}
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
