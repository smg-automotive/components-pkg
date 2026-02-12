import React, { FC, useMemo } from 'react';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

import {
  ListItemWithChildren,
  SearchableList,
} from 'src/components/list/SearchableList';
import { SearchFieldOptions } from 'src/components/input/SearchField';
import { H1 } from 'src/components/heading';

import { createTenantLabel } from '../createTenantLabel';

type TenantSelectionSelectListProps = {
  managedSellers: EnrichedSessionUser['managedSellers'];
  selectedTenantId: number | null;
  onTenantSelect: (selectedTenantId: number) => void;
  title?: string;
  searchFieldOptions?: SearchFieldOptions;
};

export const TenantSelectionSelectList: FC<TenantSelectionSelectListProps> = ({
  managedSellers,
  selectedTenantId,
  onTenantSelect,
  title,
  searchFieldOptions,
}) => {
  const listItems: Array<ListItemWithChildren> = useMemo(() => {
    return managedSellers.map((managedSeller) => {
      return {
        value: managedSeller.id.toString(),
        label: createTenantLabel(managedSeller),
        onClick: (event: React.MouseEvent<HTMLButtonElement>) =>
          onTenantSelect(parseInt(event.currentTarget.value, 10)),
        showChevron: true,
        isSelected: managedSeller.id === selectedTenantId,
      };
    });
  }, [managedSellers, selectedTenantId, onTenantSelect]);

  return (
    <>
      {title ? <H1 textStyle="heading3">{title}</H1> : null}
      <SearchableList
        listItems={listItems}
        searchFieldOptions={searchFieldOptions}
      />
    </>
  );
};
