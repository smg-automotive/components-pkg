import { act, renderHook } from '@/jest-utils';

import useFuseSearch from '../useFuseSearch';

type SearchItem = {
  id: string;
  label: string;
  category?: string;
};

const items: SearchItem[] = [
  { id: '1', label: 'Mountain Peak', category: 'Nature' },
  { id: '2', label: 'Desert Rose', category: 'Nature' },
  { id: '3', label: 'City Drive', category: 'Travel' },
];

describe('useFuseSearch', () => {
  it('returns the full list until a normalized query is set', () => {
    const { result } = renderHook(() =>
      useFuseSearch({
        items,
        fuseOptions: {
          keys: ['label'],
          threshold: 0,
          ignoreLocation: true,
        },
      }),
    );

    expect(result.current.query).toBe('');
    expect(result.current.hasQuery).toBe(false);
    expect(result.current.results).toEqual(items);

    act(() => {
      result.current.setSearchQuery('  Desert  ');
    });

    expect(result.current.query).toBe('Desert');
    expect(result.current.hasQuery).toBe(true);
    expect(result.current.results).toEqual([items[1]]);
  });

  it('supports custom result mapping and refreshes when the source items change', () => {
    const { result, rerender } = renderHook(
      ({ currentItems }: { currentItems: SearchItem[] }) =>
        useFuseSearch({
          items: currentItems,
          fuseOptions: {
            keys: ['label', 'category'],
            includeMatches: true,
            threshold: 0,
            ignoreLocation: true,
            shouldSort: false,
          },
          mapResults: (searchResults) =>
            searchResults.map(({ item, matches = [] }) => ({
              ...item,
              matchCount: matches.length,
            })),
        }),
      {
        initialProps: {
          currentItems: items,
        },
      },
    );

    act(() => {
      result.current.setSearchQuery('Nature');
    });

    expect(result.current.results).toEqual([
      { ...items[0], matchCount: 1 },
      { ...items[1], matchCount: 1 },
    ]);

    const nextItems = [
      ...items,
      { id: '4', label: 'Nature Trail', category: 'Nature' },
    ];

    rerender({ currentItems: nextItems });

    expect(result.current.results).toEqual([
      { ...nextItems[0], matchCount: 1 },
      { ...nextItems[1], matchCount: 1 },
      { ...nextItems[3], matchCount: 2 },
    ]);
  });
});
