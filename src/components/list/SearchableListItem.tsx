import React, { FC, PropsWithChildren } from 'react';

import { RangeTuple } from 'fuse.js';

import Checkbox from '../checkbox';
import Box from '../box/index';
import { SearchableListItemLabel } from './SearchableListItemLabel';
import ListItem from './ListItem';

export type ListItemType = {
  label: string;
  value?: string;
  facet?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (event: any) => void;
  isSelected: boolean;
  showDivider?: boolean;
  showChevron?: boolean;
  isCheckbox?: boolean;
  isIndeterminate?: boolean;
  highlightIndices?: readonly RangeTuple[];
  paddingLeft?: string;
};

export const SearchableListItem: FC<PropsWithChildren<ListItemType>> = ({
  label,
  value,
  facet,
  onClick,
  isSelected,
  showChevron = true,
  highlightIndices = [],
  isCheckbox = false,
  isIndeterminate = false,
  children,
}) => {
  const labelProps = {
    label,
    isSelected,
    showChevron,
    highlightIndices,
    isCheckbox,
    facet,
  };

  return (
    <ListItem css={{ breakInside: 'avoid' }}>
      {isCheckbox ? (
        <Checkbox
          label={<SearchableListItemLabel {...labelProps} />}
          name="test-checkbox"
          value={value}
          isChecked={isSelected}
          isIndeterminate={isIndeterminate}
          paddingY="sm"
          fullWidth={true}
          variant="alignTop"
          onChange={onClick}
        />
      ) : (
        <Box
          as="button"
          onClick={onClick}
          aria-current={isSelected}
          value={value}
          width="full"
          display="flex"
          paddingY="sm"
        >
          <SearchableListItemLabel {...labelProps} />
        </Box>
      )}

      {children}
    </ListItem>
  );
};
