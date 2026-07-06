import React, { FC } from 'react';
import { FuseResult } from 'fuse.js';

import { useFuseSearch, useToken } from '@/src/hooks';

import {
  SearchField,
  SearchFieldOptions,
} from '@/src/components/input/SearchField';
import { Flex } from '@/src/components/flex';

import { ListItemType, SearchableListItem } from './SearchableListItem';

import { List } from './index';

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
  listRef?: React.RefObject<HTMLUListElement | null>;
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

export const SearchableList: FC<Props> = ({
  listItems,
  NoResults = empty,
  EmptyQueryPlaceholder = empty,
  listAriaLabel = 'searchable list',
  searchFieldOptions = {},
  listOptions = { columns: 1, childrenSpacing: 'md' },
  listRef,
}) => {
  const [gray200] = useToken('colors', ['gray.200']);
  const {
    placeholder = '',
    autofocusOnDesktop = true,
    autoComplete,
  } = searchFieldOptions;
  const { columns = 1, childrenSpacing = 'md' } = listOptions;
  const areaId = 'searchableList';
  const {
    query,
    results: filteredListItems,
    setSearchQuery,
  } = useFuseSearch<ListItemWithChildren>({
    items: listItems,
    fuseOptions,
    mapResults: mapItemsFromSearchResult,
    getInitialResults: (items) => [...items],
  });

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
      />
      {query.length === 0 ? <EmptyQueryPlaceholder /> : null}
      {filteredListItems.length > 0 ? (
        <List.Root
          ref={listRef}
          width="full"
          height="full"
          id={areaId}
          aria-live="polite"
          css={{
            columns: { base: 1, md: columns },
            columnGap: '4xl',
            columnRule: `1px solid ${gray200}`,
          }}
          aria-label={listAriaLabel}
        >
          {filteredListItems.map((item, itemIndex) => {
            const parentKey = `${itemIndex}-${item.value}`;
            const children = item.children || [];

            return (
              <SearchableListItem {...item} key={parentKey}>
                {children.length > 0 ? (
                  <List.Root width="full">
                    {children.map((child, childIndex) => {
                      const childKey = `${childIndex}-${child.value}`;
                      return (
                        <SearchableListItem
                          {...child}
                          key={childKey}
                          paddingLeft={childrenSpacing}
                        />
                      );
                    })}
                  </List.Root>
                ) : null}
              </SearchableListItem>
            );
          })}
        </List.Root>
      ) : (
        <NoResults />
      )}
    </Flex>
  );
};
