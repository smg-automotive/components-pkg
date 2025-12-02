import React, { FC, JSX, ReactElement } from 'react';
import {
  Menu as ChakraMenu,
  MenuRootProps,
  MenuTriggerProps,
  Portal,
  useSlotRecipe,
} from '@chakra-ui/react';

import { CheckmarkIcon, ChevronDownSmallIcon } from '../icons';

interface MenuBaseItem {
  value: string;
}
interface MenuItem extends MenuBaseItem {
  text: JSX.Element | string;
  onClick: () => void;
}

interface MenuSelectItem extends MenuBaseItem {
  label: JSX.Element | string;
  onClick?: () => void;
}

export interface BaseMenuProps {
  title: string | ReactElement;
  fontWeightTitle?: MenuTriggerProps['fontWeight'];
  offset?: [number, number];
  menuColor?: MenuTriggerProps['color'];
  menuOptionColor?: MenuTriggerProps['color'];
  showChevron?: boolean;
  icon?: ReactElement;
  iconSpacing?: MenuTriggerProps['gap'];
  placement?: Exclude<MenuRootProps['positioning'], undefined>['placement'];
}

export interface MenuProps extends BaseMenuProps {
  items: MenuItem[];
}

export interface SelectMenuProps extends BaseMenuProps {
  value: string;
  items: MenuSelectItem[];
  onChange?: (val: string | string[]) => void;
}

export const Menu: FC<MenuProps | SelectMenuProps> = ({
  title,
  fontWeightTitle = 'regular',
  offset = [8, 0],
  menuColor,
  menuOptionColor,
  showChevron = true,
  icon,
  iconSpacing = 'sm',
  placement,
  ...restProps
}) => {
  const recipe = useSlotRecipe({ key: 'menu' });
  const styles = recipe();
  const [mainAxis = 0, crossAxis = 0] = offset;
  const optionColor = menuOptionColor || menuColor;
  const menuItems = restProps.items.map((item) => {
    const props = {
      key: `menuItem-${item.value}`,
      value: item.value,
      css: styles.item,
      ...(optionColor && { color: optionColor }),
    };
    return 'value' in restProps ? (
      <ChakraMenu.RadioItem {...props} onClick={item.onClick}>
        {item.value === restProps.value ? <CheckmarkIcon /> : null}
        {(item as MenuSelectItem).label}
      </ChakraMenu.RadioItem>
    ) : (
      <ChakraMenu.Item {...props} onSelect={item.onClick}>
        {(item as MenuItem).text}
      </ChakraMenu.Item>
    );
  });
  return (
    <ChakraMenu.Root
      positioning={{ placement, offset: { mainAxis, crossAxis } }}
    >
      <ChakraMenu.Context>
        {({ open }) => (
          <ChakraMenu.Trigger
            css={styles.trigger}
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
        )}
      </ChakraMenu.Context>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content css={styles.content}>
            {'value' in restProps ? (
              <ChakraMenu.RadioItemGroup
                value={restProps.value}
                onValueChange={({ value: changedValue }) =>
                  restProps.onChange?.(changedValue)
                }
              >
                {menuItems}
              </ChakraMenu.RadioItemGroup>
            ) : (
              menuItems
            )}
          </ChakraMenu.Content>
        </ChakraMenu.Positioner>
      </Portal>
    </ChakraMenu.Root>
  );
};
