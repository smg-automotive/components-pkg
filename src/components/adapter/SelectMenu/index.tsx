import React, { FC, ReactElement } from 'react';

import { Menu as MenuComponents, MenuProps } from 'src/components/menu';

type MenuOption = {
  value: string;
  label: string;
  onClick: () => void;
};

type SelectMenuProps = Omit<
  MenuProps,
  'items' | 'showOptionsCheckmark' | 'icon'
> & {
  options: MenuOption[];
  withIndicator?: boolean;
  leftIcon?: ReactElement;
};
export const SelectMenu: FC<SelectMenuProps> = ({
  options,
  leftIcon,
  withIndicator,
  ...rest
}) => {
  const items = options.map(({ value, label, onClick }) => ({
    value,
    text: label,
    onClick,
  }));
  return (
    <MenuComponents
      showOptionsCheckmark={withIndicator}
      items={items}
      icon={leftIcon}
      {...rest}
    />
  );
};
