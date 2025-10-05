import React, {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

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
  scrollToFirstSelectedItem?: boolean;
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
      scrollToFirstSelectedItem = false,
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
    const listContainerRef = useRef<HTMLUListElement>(null);
    const hasScrolledToFirstSelected = useRef(false);

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

    useEffect(() => {
      hasScrolledToFirstSelected.current = false;
    }, [listItems]);

    useEffect(() => {
      if (
        !scrollToFirstSelectedItem ||
        !listContainerRef.current ||
        hasScrolledToFirstSelected.current ||
        searchState.query !== ''
      ) {
        return;
      }

      const findFirstSelected = (items: ListItemWithChildren[]) => {
        for (const item of items) {
          if (item.isSelected) return item;
          if (item.children) {
            for (const child of item.children) {
              if (child.isSelected) return child;
            }
          }
        }
        return null;
      };

      const firstSelected = findFirstSelected(searchState.listItems);
      if (!firstSelected) return;

      hasScrolledToFirstSelected.current = true;

      const scroll = () => {
        const container = listContainerRef.current;
        if (!container) return false;

        const element = container.querySelector(
          `input[name="searchable-list-item-${firstSelected.value}"], button[name="searchable-list-item-${firstSelected.value}"]`,
        );

        if (!element) return false;

        const rect = element.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;

        element.scrollIntoView({ behavior: 'auto', block: 'center' });

        let parent = element.parentElement;
        while (parent) {
          const style = window.getComputedStyle(parent);
          const scrollable =
            style.overflow === 'auto' ||
            style.overflow === 'scroll' ||
            style.overflowY === 'auto' ||
            style.overflowY === 'scroll';

          if (scrollable && parent.scrollHeight > parent.clientHeight) {
            const parentRect = parent.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            const targetTop =
              parent.scrollTop +
              (elementRect.top - parentRect.top) -
              parentRect.height / 2;

            parent.scrollTo({ top: targetTop, behavior: 'auto' });
            requestAnimationFrame(() => {
              if (parent && Math.abs(parent.scrollTop - targetTop) > 10) {
                parent.scrollTop = targetTop;
              }
            });
            break;
          }
          parent = parent.parentElement;
        }
        return true;
      };

      if (scroll()) return;

      const container = listContainerRef.current;
      if (!container) return;

      let attempts = 0;
      let active = true;

      const observer = new MutationObserver(() => {
        if (active && scroll()) {
          observer.disconnect();
          active = false;
        }
      });

      observer.observe(container, { childList: true, subtree: true });

      const attempt = () => {
        if (!active || ++attempts > 30) {
          observer.disconnect();
          active = false;
          return;
        }
        if (!scroll()) requestAnimationFrame(attempt);
      };

      let frames = 0;
      const delay = () => {
        if (++frames > 60) attempt();
        else requestAnimationFrame(delay);
      };
      requestAnimationFrame(delay);

      setTimeout(() => {
        observer.disconnect();
        active = false;
      }, 5000);
    }, [scrollToFirstSelectedItem, searchState.listItems, searchState.query]);

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
            ref={listContainerRef}
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
