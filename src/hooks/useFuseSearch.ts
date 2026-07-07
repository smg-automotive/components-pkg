import { useCallback, useMemo, useState } from 'react';
import Fuse, { FuseResult, IFuseOptions } from 'fuse.js';

type UseFuseSearchOptions<TItem, TResult = TItem> = {
  items: TItem[];
  fuseOptions: IFuseOptions<TItem>;
  mapResults?: (searchResults: FuseResult<TItem>[]) => TResult[];
  getInitialResults?: (items: TItem[]) => TResult[];
  normalizeQuery?: (query: string) => string;
  initialQuery?: string;
};

const defaultNormalizeQuery = (query: string) => query.trim();

const getDefaultResults = <TItem, TResult>(items: TItem[]) =>
  items as unknown as TResult[];

const getMappedResults = <TItem, TResult>(
  searchResults: FuseResult<TItem>[],
  mapResults?: (searchResults: FuseResult<TItem>[]) => TResult[],
) => {
  if (mapResults) {
    return mapResults(searchResults);
  }

  return searchResults.map(({ item }) => item) as unknown as TResult[];
};

const searchItems = <TItem>(fuse: Fuse<TItem>, query: string) => {
  if (typeof fuse.options.minMatchCharLength === 'number') {
    fuse.options.minMatchCharLength = query.length || 1;
  }

  return fuse.search(query);
};

const useFuseSearch = <TItem, TResult = TItem>({
  items,
  fuseOptions,
  mapResults,
  getInitialResults,
  normalizeQuery = defaultNormalizeQuery,
  initialQuery = '',
}: UseFuseSearchOptions<TItem, TResult>) => {
  const [query, setQuery] = useState(() => normalizeQuery(initialQuery));

  const fullResults = useMemo(() => {
    const getResults = getInitialResults || getDefaultResults<TItem, TResult>;
    return getResults([...items]);
  }, [getInitialResults, items]);

  const fuse = useMemo(
    () => new Fuse(items, fuseOptions),
    [fuseOptions, items],
  );

  const results = useMemo(() => {
    if (!query) {
      return fullResults;
    }

    return getMappedResults(searchItems(fuse, query), mapResults);
  }, [fuse, fullResults, mapResults, query]);

  const setSearchQuery = useCallback(
    (newQuery: string) => {
      setQuery(normalizeQuery(newQuery));
    },
    [normalizeQuery],
  );

  return {
    hasQuery: query.length > 0,
    query,
    results,
    setSearchQuery,
  };
};

export default useFuseSearch;
