import React, { FC, PropsWithChildren } from 'react';
import { RangeTuple } from 'fuse.js';
import {
  Button,
  CheckboxCheckedChangeDetails,
  ConditionalValue,
} from '@chakra-ui/react';

import { Checkbox, CheckboxProps } from '../checkbox';
import { SearchableListItemLabel } from './SearchableListItemLabel';

import { List } from './index';

type CommonListItem = {
  label: string;
  value: string;
  facet?: string;
  isSelected: boolean;
  showChevron?: boolean;
  highlightIndices?: readonly RangeTuple[];
  isCheckbox?: boolean;
  paddingLeft?: ConditionalValue<'md' | '2xl'>;
};

type CommonProps = {
  value: string;
  paddingY: CheckboxProps['paddingY'];
  name: string;
  'aria-current': boolean;
};

type CheckboxListItem = {
  onClick: (details: CheckboxCheckedChangeDetails) => void;
  isCheckbox: true;
  isIndeterminate?: boolean;
} & CommonListItem;

type RadioButtonListItem = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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

  return (
    <List.Item css={{ breakInside: 'avoid' }} paddingLeft={props.paddingLeft}>
      {isCheckbox ? (
        <Checkbox {...checkboxProps} />
      ) : (
        <Button
          value={value}
          paddingY="sm"
          name={`searchable-list-item-${value}`}
          aria-current={isSelected}
          onClick={!isCheckbox ? props.onClick : undefined}
          width="full"
          display="flex"
          paddingX="0"
        >
          <SearchableListItemLabel {...labelProps} />
        </Button>
      )}
      {children}
    </List.Item>
  );
};
