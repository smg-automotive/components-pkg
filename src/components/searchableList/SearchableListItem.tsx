import React, { ChangeEvent, FC, PropsWithChildren } from 'react';
import { RangeTuple } from 'fuse.js';
import { Button, ButtonProps, List } from '@chakra-ui/react';

import { Checkbox, CheckboxProps } from '../checkbox';
import { SearchableListItemLabel } from './SearchableListItemLabel';

type CommonListItem = {
  label: string;
  value: string;
  facet?: string;
  isSelected: boolean;
  showChevron?: boolean;
  highlightIndices?: readonly RangeTuple[];
  isCheckbox?: boolean;
  paddingLeft?: string;
};

type CommonProps = {
  value: string;
  paddingY: ButtonProps['paddingY'] | CheckboxProps['paddingY'];
  name: string;
  'aria-current': boolean;
};

type CheckboxListItem = {
  onClick: (event: ChangeEvent<HTMLInputElement>) => void;
  isCheckbox: true;
  isIndeterminate?: boolean;
} & CommonListItem;

type RadioButtonListItem = {
  onClick: ButtonProps['onClick'];
  isCheckbox?: false;
} & CommonListItem;

export type ListItemType = CheckboxListItem | RadioButtonListItem;

const isCheckboxType = (
  listItem: ListItemType,
): listItem is CheckboxListItem => {
  return !!listItem.isCheckbox;
};

export const SearchableListItem: FC<PropsWithChildren<ListItemType>> = (
  props,
) => {
  const isCheckbox = isCheckboxType(props);
  const {
    label,
    value,
    facet,
    isSelected,
    showChevron = true,
    highlightIndices = [],
    children,
  } = props;

  const labelProps = {
    label,
    isSelected,
    showChevron,
    highlightIndices,
    isCheckbox,
    facet,
  };
  const commonProps: CommonProps = {
    value,
    paddingY: 'sm',
    name: `searchable-list-item-${value}`,
    'aria-current': isSelected,
  };

  const checkboxProps: CheckboxProps = {
    ...commonProps,
    label: <SearchableListItemLabel {...labelProps} />,
    checked: isSelected,
    indeterminate: isCheckbox ? !!props.isIndeterminate : false,
    fullWidth: true,
    variant: 'alignTop',
    onChange: isCheckbox ? props.onClick : undefined,
  };
  const radioButtonProps: ButtonProps = {
    ...commonProps,
    onClick: !isCheckbox ? props.onClick : undefined,
    onChange: undefined,
    width: 'full',
    display: 'flex',
    paddingX: 'none',
  };

  return (
    <List.Item css={{ breakInside: 'avoid' }} paddingLeft={props.paddingLeft}>
      {isCheckbox ? (
        <Checkbox {...checkboxProps} />
      ) : (
        <Button {...radioButtonProps}>
          <SearchableListItemLabel {...labelProps} />
        </Button>
      )}
      {children}
    </List.Item>
  );
};
