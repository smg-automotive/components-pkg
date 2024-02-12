import { ReactNode } from 'react';

export type Item<ItemKey, FilterName> = {
  key: ItemKey;
  label: string;
  facet: number;
  filterName: FilterName;
  isChecked?: boolean;
  image?: ReactNode;
  highlightIndices?: ReadonlyArray<[number, number]>;
};

export type State<ItemKey extends string> = { [key in ItemKey]: boolean };

export type CheckboxFilterItem<
  ItemKey extends string,
  FilterName extends string
> = {
  parent: Item<ItemKey, FilterName>;
  childCheckboxes: Item<ItemKey, FilterName>[];
};

export type Props<ItemKey extends string, FilterName extends string> = {
  /**
   * @template ItemKey
   * @param {Item} item     renders one checkbox { key: ItemKey, label: string, facet: number, isChecked: boolean }
   * @param item.key        unique name of the checkbox
   * @param item.label      label shown on the UI
   * @param item.facet      Numeric value shown next to the checkbox label. Indicates how many search results are going to be visible after the checkbox has been applied.
   * @param item.isChecked  The checkbox filter is a controlled component and the updated filter value must be passed in order to see the correct state.
   * @param item.image      image/icon shown on the UI
   */
  // TODO: check if it can be done without breaking contract
  items: CheckboxFilterItem<ItemKey, FilterName>[];
  /**
   * Callback function that is triggered after any checkbox has been clicked.
   * @param updatedItem     contains the modified checkbox with the new value
   * @param newState        contains the new state of the whole filter group
   */
  onApply: (updatedItem: Item<ItemKey, FilterName>) => void;
  numberOfColumnsOnDesktop?: number;
  icon?: ReactNode;
};

// TODO: move this from here (not a type)
export const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};
