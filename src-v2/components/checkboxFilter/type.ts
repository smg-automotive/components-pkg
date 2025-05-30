import { ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

export type Item<ItemKey, FilterName> = {
  childCheckboxes?: Item<ItemKey, FilterName>[];
  facet?: number | null;
  filterName?: FilterName;
  highlightIndices?: ReadonlyArray<[number, number]>;
  image?: ReactNode;
  isChecked?: boolean;
  key: ItemKey;
  label: string;
};

export type Props<ItemKey extends string, FilterName extends string> = {
  alwaysExpanded?: boolean;
  /**
   * @template ItemKey
   * @template FilterName
   * @param {Item} item     renders one checkbox { key: ItemKey, label: string, facet: number, isChecked: boolean }
   * @param item.key        unique name of the checkbox
   * @param item.label      label shown on the UI
   * @param item.facet      Numeric value shown next to the checkbox label. Indicates how many search results are going to be visible after the checkbox has been applied.
   * @param item.isChecked  The checkbox filter is a controlled component and the updated filter value must be passed in order to see the correct state.
   * @param item.image      image/icon shown on the UI
   * @param item.childCheckboxes      to show a collapsible checkbox with child items
   * @param item.filterName      in case multiple filters are controlled
   */
  items: Item<ItemKey, FilterName>[];
  /**
   * Callback function that is triggered after any checkbox has been clicked.
   * In case of the nested checkboxes it needs to update the parent/children respectively
   * @param updatedItem     contains the modified checkbox with the new value
   */
  onApply: (updatedItem: Item<ItemKey, FilterName>) => void;
  numberOfColumnsOnDesktop?: number;
  onToggleCheckboxGroup?: (pressedItem: Item<ItemKey, FilterName>) => void;
  language: Language;
};
