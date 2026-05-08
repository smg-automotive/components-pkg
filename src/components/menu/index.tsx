import React, { FC, JSX, ReactElement } from 'react';
import {
  Box,
  Menu as ChakraMenu,
  MenuContentProps,
  MenuRootProps,
  MenuTriggerProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { CheckmarkIcon, ChevronDownSmallIcon } from '../icons';

interface MenuItem {
  text: JSX.Element | string;
  value: string;
  onClick: () => void;
}

export interface MenuProps {
  title: string | ReactElement;
  items: MenuItem[];
  value?: string;
  fontWeightTitle?: MenuTriggerProps['fontWeight'];
  offset?: {
    mainAxis?: number;
    crossAxis?: number;
  };
  menuColor?: MenuTriggerProps['color'];
  menuOptionColor?: MenuContentProps['color'];
  showChevron?: boolean;
  icon?: ReactElement;
  iconSpacing?: MenuTriggerProps['gap'];
  placement?: Exclude<MenuRootProps['positioning'], undefined>['placement'];
  showOptionsCheckmark?: boolean;
}

export const Menu: FC<MenuProps> = ({
  title,
  items,
  value,
  fontWeightTitle = 'regular',
  offset = {
    mainAxis: 8,
    crossAxis: 0,
  },
  menuColor = 'blue.700',
  menuOptionColor,
  showChevron = true,
  icon,
  iconSpacing = 'sm',
  placement,
  showOptionsCheckmark = false,
}) => {
  const recipe = useSlotRecipe({ key: 'menu' });
  const styles = recipe();
  return (
    <ChakraMenu.Root
      positioning={{
        placement,
        offset: { mainAxis: offset.mainAxis, crossAxis: offset.crossAxis },
      }}
    >
      <ChakraMenu.Context>
        {({ open }) => {
          // menuColor takes precedence over the open state color
          const color = menuColor;

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
      <ChakraMenu.Positioner>
        <ChakraMenu.Content css={styles.content}>
          {items.map(({ onClick, text, value: itemValue }) => {
            const optionColor = menuOptionColor;

            return (
              <ChakraMenu.Item
                key={`menuItem-${itemValue}`}
                value={itemValue}
                onSelect={onClick}
                css={styles.item}
                {...(optionColor && { color: optionColor })}
              >
                {showOptionsCheckmark ? (
                  <Box
                    w="xs"
                    display="flex"
                    justifyContent="center"
                    marginRight="sm"
                  >
                    {itemValue === value ? <CheckmarkIcon /> : null}
                  </Box>
                ) : null}
                {text}
              </ChakraMenu.Item>
            );
          })}
        </ChakraMenu.Content>
      </ChakraMenu.Positioner>
    </ChakraMenu.Root>
  );
};
