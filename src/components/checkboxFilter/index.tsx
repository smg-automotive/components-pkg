import React, { ReactNode } from 'react';

import { chakra } from '@chakra-ui/react';

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
};

const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};

function CheckboxFilter<ItemKey extends string>({
  name,
  items,
  onApply,
}: Props<ItemKey>) {
  return (
    <Stack spacing="2xl">
      {items.map((item) => {
        return (
          <Checkbox
            key={`filter_${name}_${item.label}`}
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
                <chakra.span
                  w="full"
                  display="flex"
                  justifyContent="space-between"
                >
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
                {}
              );
              onApply(
                { ...item, isChecked },
                { ...previousState, [item.key]: isChecked }
              );
            }}
            isDisabled={item.facet === 0 && !item.isChecked}
            isChecked={item.isChecked}
            value={item.key}
          />
        );
      })}
    </Stack>
  );
}

export default CheckboxFilter;
