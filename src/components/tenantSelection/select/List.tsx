import React, { forwardRef, useMemo } from 'react';
import type { ManagedSeller } from '@smg-automotive/auth';

import {
  ListItemWithChildren,
  SearchableList,
} from 'src/components/list/SearchableList';
import { SearchFieldOptions } from 'src/components/input/SearchField';
import { H1 } from 'src/components/heading';

import { createTenantLabel } from '../createTenantLabel';

type TenantSelectionSelectListProps = {
  managedSellers: ManagedSeller[];
  selectedTenantId: number | null;
  onTenantSelect: (selectedTenantId: number) => void;
  title?: string;
  searchFieldOptions?: SearchFieldOptions;
};

export const TenantSelectionSelectList = forwardRef<
  HTMLInputElement,
  TenantSelectionSelectListProps
>(
  (
    {
      managedSellers,
      selectedTenantId,
      onTenantSelect,
      title,
      searchFieldOptions,
    },
    ref,
  ) => {
    const listItems: Array<ListItemWithChildren> = useMemo(() => {
      return managedSellers.map((managedSeller) => {
        return {
          value: managedSeller.id.toString(),
          label: createTenantLabel(managedSeller),
          onClick: (event) =>
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
          ref={ref}
          searchFieldOptions={searchFieldOptions}
        />
      </>
    );
  },
);
