import React, { ReactNode } from 'react';

import { chakra, StackDivider } from '@chakra-ui/react';

import Stack from '../stack';
import Checkbox from '../checkbox';

type Item<ItemKey> = {
  key: ItemKey;
  label: string;
  facet: number;
  isChecked: boolean;
  image?: ReactNode;
};

type State<ItemKey extends string> = { [key in ItemKey]: boolean };

type Props<ItemKey extends string> = {
  /**
   * Name of the filter - only used on the DOM.
   */
  name: string;
  /**
   * @template ItemKey
   * @param {Item} item     renders one checkbox { key: ItemKey, label: string, facet: number, isChecked: boolean }
   * @param item.key        unique name of the checkbox
   * @param item.label      label shown on the UI
   * @param item.facet      Numeric value shown next to the checkbox label. Indicates how many search results are going to be visible after the checkbox has been applied.
   * @param item.isChecked  The checkbox filter is a controlled component and the updated filter value must be passed in order to see the correct state.
   * @param item.image      image/icon shown on the UI
   */
  items: Item<ItemKey>[];
  /**
   * Callback function that is triggered after any checkbox has been clicked.
   * @param updatedItem     contains the modified checkbox with the new value
   * @param newState        contains the new state of the whole filter group
   */
  onApply: (updatedItem: Item<ItemKey>, newState: State<ItemKey>) => void;
  numberOfColumns?: number;
};

const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};

function CheckboxFilter<ItemKey extends string>({
  name,
  items,
  onApply,
  numberOfColumns = 3,
}: Props<ItemKey>) {
  const itemsPerColumn: Item<ItemKey>[] | Item<ItemKey>[][] = items.reduce(
    (acc, item, index) => {
      const columnIndex = index % numberOfColumns;
      if (!acc[columnIndex]) {
        acc[columnIndex] = [];
      }
      (acc[columnIndex] as Item<ItemKey>[]).push(item);
      return acc;
    },
    [] as Item<ItemKey>[] | Item<ItemKey>[][],
  );

  const isSingleColumn = numberOfColumns === 1;

  return (
    <Stack
      spacing="2xl"
      divider={
        isSingleColumn ? undefined : <StackDivider borderColor="gray.100" />
      }
      direction={isSingleColumn ? 'column' : 'row'}
    >
      {itemsPerColumn.map((columnItems) => {
        if (Array.isArray(columnItems)) {
          return (
            <Stack key={`filter_column_${name}`} spacing="2xl">
              {columnItems.map((item) => {
                return (
                  <CheckboxWrapper
                    key={`filter_${name}_${item.label}`}
                    name={name}
                    items={columnItems}
                    item={item}
                    onApply={onApply}
                  />
                );
              })}
            </Stack>
          );
        } else {
          return (
            <CheckboxWrapper
              key={`filter_${name}_${columnItems.label}`}
              name={name}
              items={itemsPerColumn as Item<ItemKey>[]}
              item={columnItems}
              onApply={onApply}
            />
          );
        }
      })}
    </Stack>
  );
}

type CheckboxWrapperProps<ItemKey extends string> = {
  items: Item<ItemKey>[];
  name: string;
  item: Item<ItemKey>;
  onApply: (updatedItem: Item<ItemKey>, newState: State<ItemKey>) => void;
  numberOfColumns?: number;
};

function CheckboxWrapper<ItemKey extends string>({
  items,
  item,
  name,
  onApply,
}: CheckboxWrapperProps<ItemKey>) {
  return (
    <Checkbox
      name={`filter_${name}_${item.label}`}
      label={
        item.image ? (
          <chakra.span display="flex" alignItems="center">
            {item.image}
            <chakra.span
              w="full"
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              marginLeft="sm"
            >
              <chakra.span>{item.label}</chakra.span>
              <chakra.span>
                {addThousandSeparatorToNumber(item.facet)}
              </chakra.span>
            </chakra.span>
          </chakra.span>
        ) : (
          <chakra.span w="full" display="flex" justifyContent="space-between">
            <chakra.span>{item.label}</chakra.span>
            <chakra.span>
              {addThousandSeparatorToNumber(item.facet)}
            </chakra.span>
          </chakra.span>
        )
      }
      onChange={(event) => {
        const isChecked = event.target.checked;
        const previousState = items.reduce<Partial<State<ItemKey>>>(
          (acc, currentItem) => {
            acc[currentItem.key] = currentItem.isChecked;
            return acc;
          },
          {},
        );
        onApply(
          { ...item, isChecked },
          { ...previousState, [item.key]: isChecked },
        );
      }}
      isDisabled={item.facet === 0 && !item.isChecked}
      isChecked={item.isChecked}
      value={item.key}
    />
  );
}

export default CheckboxFilter;
