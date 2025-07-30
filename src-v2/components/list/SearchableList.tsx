import React, { FC, forwardRef, useCallback, useEffect, useState } from 'react';

import Fuse, { FuseResult } from 'fuse.js';

import { SearchField, SearchFieldOptions } from '../input/SearchField';
import Flex from '../flex';
import { ListItemType, SearchableListItem } from './SearchableListItem';

import List from './';

export type ListItemWithChildren = ListItemType & {
  children?: ListItemType[];
};

export type Props = {
  listItems: ListItemWithChildren[];
  NoResults?: FC;
  EmptyQueryPlaceholder?: FC;
  listAriaLabel?: string;
  searchFieldOptions?: SearchFieldOptions;
  listOptions?: { columns?: number; childrenSpacing?: 'md' | '2xl' };
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
): ListItemWithChildren[] => {
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
    const children = childMatches.reduce<ListItemType[]>(
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
  fuse.options.minMatchCharLength = query.length || 1;
  return fuse.search(query);
};

const getFuseInstance = (listItems: ListItemWithChildren[]) => {
  // Not casting the instance will result in the options not being typed
  return new Fuse(listItems, fuseOptions) as unknown as FuseSearch;
};

export const SearchableList = forwardRef<HTMLInputElement, Props>(
  (
    {
      listItems,
      NoResults = empty,
      EmptyQueryPlaceholder = empty,
      listAriaLabel = 'searchable list',
      searchFieldOptions = {},
      listOptions = { columns: 1, childrenSpacing: 'md' },
    },
    ref,
  ) => {
    const [searchState, setSearchState] = useState<{
      query: string;
      listItems: typeof listItems;
      fullListItems: typeof listItems;
      fuse: FuseSearch;
    }>({
      query: '',
      listItems,
      fullListItems: [...listItems],
      fuse: getFuseInstance(listItems),
    });
    const {
      placeholder = '',
      autofocusOnDesktop = true,
      autoComplete,
    } = searchFieldOptions;
    const { columns = 1, childrenSpacing = 'md' } = listOptions;
    const areaId = 'searchableList';
    const { query } = searchState;

    useEffect(() => {
      setSearchState((currentState) => {
        const fuse = getFuseInstance(listItems);
        if (currentState.query === '') {
          return {
            listItems,
            fullListItems: [...listItems],
            fuse,
            query: currentState.query,
          };
        }

        const searchResults = search({ fuse, query: currentState.query });
        const filteredListItems = mapItemsFromSearchResult(searchResults);
        return {
          listItems: filteredListItems,
          fuse,
          query: currentState.query,
          fullListItems: [...listItems],
        };
      });
    }, [listItems]);

    const setSearchQuery = useCallback((newQuery: string) => {
      setSearchState((currentState) => {
        const trimmedQuery = newQuery.trim();

        if (!trimmedQuery) {
          return {
            ...currentState,
            listItems: currentState.fullListItems,
            query: trimmedQuery,
          };
        }

        const searchResults = search({
          fuse: currentState.fuse,
          query: trimmedQuery,
        });
        const filteredListItems = mapItemsFromSearchResult(searchResults);
        return {
          ...currentState,
          listItems: filteredListItems,
          query: trimmedQuery,
        };
      });
    }, []);

    return (
      <Flex gridGap="md" direction="column" width="full">
        <SearchField
          name="searchableListSearchFiled"
          searchQuery={query}
          setSearchQuery={setSearchQuery}
          ariaControls={areaId}
          placeholder={placeholder}
          autofocusOnDesktop={autofocusOnDesktop}
          autoComplete={autoComplete}
          ref={ref}
        />
        {searchState.query.length === 0 ? <EmptyQueryPlaceholder /> : null}
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
            aria-label={listAriaLabel}
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
  },
);
