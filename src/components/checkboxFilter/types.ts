import { ChangeEvent, ReactNode } from 'react';

export type Item<ItemKey> = {
  key: ItemKey;
  label: string;
  facet: number;
  isChecked: boolean;
  image?: ReactNode;
  highlightIndices?: ReadonlyArray<[number, number]>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type State<ItemKey extends string> = { [key in ItemKey]: boolean };

export type Props<ItemKey extends string> = {
  /**
   * Name of the filter - only used on the DOM.
   */
  name: string;
  /**
   * @template ItemKey
   * @param {Item} item     renders one checkbox { key: ItemKey, label: string, facet: number, isChecked: boolean, onChange: (event: ChangeEvent<HTMLInputElement>) => void}
   * @param item.key        unique name of the checkbox
   * @param item.label      label shown on the UI
   * @param item.facet      Numeric value shown next to the checkbox label. Indicates how many search results are going to be visible after the checkbox has been applied.
   * @param item.isChecked  The checkbox filter is a controlled component and the updated filter value must be passed in order to see the correct state.
   * @param item.image      image/icon shown on the UI
   * @param item.onChange   function that is triggered after any checkbox has been clicked
   */
  // items?: Item<ItemKey>[];
  item: Item<ItemKey>;
  /**
   * Callback function that is triggered after any checkbox has been clicked.
   * @param updatedItem     contains the modified checkbox with the new value
   * @param newState        contains the new state of the whole filter group
   */
  // onApply: (updatedItem: Item<ItemKey>, newState: State<ItemKey>) => void;
  isCollapsible?: boolean;
  isParent?: boolean;
  numberOfColumnsOnDesktop?: number;
  onParentChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  icon?: ReactNode;
};

// onChange={(event) => {
//   const isChecked = event.target.checked;
//   const previousState = items.reduce<Partial<State<ItemKey>>>(
//     (acc, currentItem) => {
//       acc[currentItem.key] = currentItem.isChecked;
//       return acc;
//     },
//     {},
//   );
//   onApply(
//     { ...item, isChecked },
//     { ...previousState, [item.key]: isChecked },
//   );
// }}
