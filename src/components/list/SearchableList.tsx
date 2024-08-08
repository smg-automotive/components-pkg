import React, { FC, useCallback, useMemo, useState } from 'react';

import Fuse, { IFuseOptions } from 'fuse.js';

import { List } from '@smg-automotive/components';

import Flex from '../flex';
import { SearchField, SearchFieldOptions } from './SearchField';
import { ListItemType, SearchableListItem } from './SearchableListItem';

export type Props = {
  listItems: Array<ListItemType>;
  fuseOptions: IFuseOptions<ListItemType>;
  searchFieldOptions?: SearchFieldOptions;
};

export const SearchableList: FC<Props> = ({
  listItems,
  fuseOptions,
  searchFieldOptions = {},
}) => {
  const [searchState, setSearchState] = useState<{
    query: string;
    listItems: typeof listItems;
  }>({
    query: '',
    listItems: listItems,
  });

  const fuse = useMemo(() => {
    // Not casting the instance will result in the options not being typed
    return new Fuse<ListItemType>(
      listItems,
      fuseOptions,
    ) as unknown as Fuse<ListItemType> & {
      options: typeof fuseOptions;
    };
  }, [listItems, fuseOptions]);

  const { query } = searchState;
  const setSearchQuery = useCallback(
    (newQuery: string) => {
      const trimmedQuery = newQuery.trim();
      fuse.options.minMatchCharLength = newQuery.length;
      const matches = fuse.search(trimmedQuery);
      const filteredListItems = !trimmedQuery
        ? listItems
        : matches.map((match) => {
            return {
              ...match.item,
              highlightIndices: match.matches ? match.matches[0].indices : [],
            };
          });

      setSearchState(() => {
        return { listItems: filteredListItems, query: trimmedQuery };
      });
    },
    [fuse, listItems],
  );

  const areaId = 'searchableList';
  return (
    <Flex gridGap="md" direction="column" width="full">
      <SearchField
        name="searchableListSearchFiled"
        searchQuery={query}
        setSearchQuery={setSearchQuery}
        ariaControls={areaId}
        {...searchFieldOptions}
      />
      {searchState.listItems.length > 0 ? (
        <List width="full" height="full" id={areaId} aria-live="polite">
          {searchState.listItems.map((item) => (
            <SearchableListItem key={item.value} {...item} />
          ))}
        </List>
      ) : null}
    </Flex>
  );
};
