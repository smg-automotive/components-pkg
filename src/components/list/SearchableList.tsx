import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import Fuse, { FuseResult } from 'fuse.js';

import { SearchField, SearchFieldOptions } from '../input/SearchField';
import Flex from '../flex';
import { ListItemType, SearchableListItem } from './SearchableListItem';

import List from './';

export type ListItemWithChildren = ListItemType & {
  children?: Array<ListItemType>;
};

export type Props = {
  listItems: Array<ListItemWithChildren>;
  noResults?: FC;
  insertion?: FC;
  ariaLabel?: string;
  searchFieldOptions?: SearchFieldOptions;
  listOptions?: { columns: number; childrenSpacing?: 'md' | '2xl' };
};

type FuseSearch = Fuse<ListItemWithChildren> & {
  options: typeof fuseOptions;
};

const fuseOptions = {
  keys: ['label', 'children.label'],
  includeMatches: true,
  threshold: 0,
  ignoreLocation: true,
  minMatchCharLength: 1,
  shouldSort: false,
};

const mapItemsFromSearchResult = (
  searchResults: FuseResult<ListItemWithChildren>[],
): Array<ListItemWithChildren> => {
  return searchResults.map(({ matches = [], item }) => {
    const parentMatch = matches.find((match) => match.key === 'label');
    const parentHighlightIndices = parentMatch ? parentMatch.indices : [];
    const childMatches = item.children
      ? matches.filter((match) => match.key === 'children.label')
      : [];

    if (
      !item.children ||
      item.children.length === 0 ||
      childMatches.length === 0
    ) {
      return {
        ...item,
        highlightIndices: parentHighlightIndices,
      };
    }

    const itemChildren = item.children || [];
    const children = childMatches.reduce<Array<ListItemType>>(
      (accumulator, childMatch) => {
        if (childMatch.refIndex === undefined) {
          return accumulator;
        }

        const child = itemChildren[childMatch.refIndex];
        accumulator.push({
          ...child,
          highlightIndices: childMatch.indices,
        });
        return accumulator;
      },
      [],
    );

    return {
      ...item,
      ...(children ? { children } : {}),
      highlightIndices: parentMatch ? parentMatch.indices : [],
    };
  });
};

const empty = () => null;

const search = ({ query, fuse }: { query: string; fuse: FuseSearch }) => {
  fuse.options.minMatchCharLength = query.length;
  return fuse.search(query);
};

export const SearchableList: FC<Props> = ({
  listItems,
  noResults: NoResults = empty,
  insertion: Insertion = empty,
  ariaLabel = 'searchable list',
  searchFieldOptions = {},
  listOptions = { columns: 1, childrenSpacing: 'md' },
}) => {
  const [searchState, setSearchState] = useState<{
    query: string;
    listItems: typeof listItems;
  }>({
    query: '',
    listItems,
  });

  useEffect(() => {
    if (searchState.query === '') {
      setSearchState((currentState) => {
        return { listItems, query: currentState.query };
      });
      return;
    }

    const searchResults = search({ fuse, query: searchState.query });
    const filteredListItems = mapItemsFromSearchResult(searchResults);
    setSearchState((currentState) => {
      return { listItems: filteredListItems, query: currentState.query };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listItems]);

  const { placeholder = '' } = searchFieldOptions;
  const { columns, childrenSpacing } = listOptions;

  const fuse = useMemo(() => {
    // Not casting the instance will result in the options not being typed
    return new Fuse<ListItemWithChildren>(
      listItems,
      fuseOptions,
    ) as unknown as FuseSearch;
  }, [listItems]);

  const { query } = searchState;
  const setSearchQuery = useCallback((newQuery: string) => {
    const trimmedQuery = newQuery.trim();
    if (!trimmedQuery) {
      setSearchState(() => {
        return { listItems, query: trimmedQuery };
      });
      return;
    }

    const searchResults = search({ fuse, query: trimmedQuery });
    const filteredListItems = mapItemsFromSearchResult(searchResults);
    setSearchState(() => {
      return { listItems: filteredListItems, query: trimmedQuery };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const areaId = 'searchableList';

  return (
    <Flex gridGap="md" direction="column" width="full">
      <SearchField
        name="searchableListSearchFiled"
        searchQuery={query}
        setSearchQuery={setSearchQuery}
        ariaControls={areaId}
        placeholder={placeholder}
      />
      {searchState.query.length === 0 ? <Insertion /> : null}
      {searchState.listItems.length > 0 ? (
        <List
          width="full"
          height="full"
          id={areaId}
          aria-live="polite"
          sx={{
            columns: { base: 1, md: columns },
            columnGap: 'var(--chakra-space-4xl)',
            columnRule: '1px solid var(--chakra-colors-gray-100)',
          }}
          aria-label={ariaLabel}
        >
          {searchState.listItems.map((item, itemIndex) => {
            const parentKey = `${itemIndex}-${item.value}`;
            const children = item.children || [];

            return (
              <SearchableListItem {...item} key={parentKey}>
                {children.length > 0 ? (
                  <List width="full" paddingLeft={childrenSpacing}>
                    {children.map((child, childIndex) => {
                      const childKey = `${childIndex}-${child.value}`;
                      return <SearchableListItem {...child} key={childKey} />;
                    })}
                  </List>
                ) : null}
              </SearchableListItem>
            );
          })}
        </List>
      ) : (
        <NoResults />
      )}
    </Flex>
  );
};
