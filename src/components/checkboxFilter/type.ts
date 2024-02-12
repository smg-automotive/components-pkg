import { ReactNode } from 'react';

export type Item<ItemKey> = {
  key: ItemKey;
  label: string;
  facet: number;
  filterName: string;
  isChecked?: boolean;
  image?: ReactNode;
  highlightIndices?: ReadonlyArray<[number, number]>;
};

export type State<ItemKey extends string> = { [key in ItemKey]: boolean };

export type Props<ItemKey extends string> = {
  /**
   * @template ItemKey
   * @param {Item} item     renders one checkbox { key: ItemKey, label: string, facet: number, isChecked: boolean }
   * @param item.key        unique name of the checkbox
   * @param item.label      label shown on the UI
   * @param item.facet      Numeric value shown next to the checkbox label. Indicates how many search results are going to be visible after the checkbox has been applied.
   * @param item.isChecked  The checkbox filter is a controlled component and the updated filter value must be passed in order to see the correct state.
   * @param item.image      image/icon shown on the UI
   */
  items: { parent: Item<ItemKey>; childCheckboxes: Item<ItemKey>[] }[];
  /**
   * Callback function that is triggered after any checkbox has been clicked.
   * @param updatedItem     contains the modified checkbox with the new value
   * @param newState        contains the new state of the whole filter group
   */
  onApply: (updatedItem: Item<ItemKey>) => void;
  numberOfColumnsOnDesktop?: number;
  icon?: ReactNode;
};

export const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};
