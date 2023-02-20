import React from 'react';

import { chakra } from '@chakra-ui/react';

import Stack from '../stack';
import Checkbox from '../checkbox';

type Item<ItemKey> = {
  key: ItemKey;
  label: string;
};

type Props<ItemKey extends string> = {
  /**
   * Name of the filter - only used on the DOM.
   */
  name: string;
  /**
   * @param Item: { key: ItemKey, label: string }
   */
  items: Item<ItemKey>[];
  /**
   * The checkbox filter is a controlled component and the updated filter value must be passed in order to see the correct state.
   */
  checked: { [key in ItemKey]: boolean };
  /**
   * Numeric value shown next to the checkbox label. Indicates how many search results are going to be visible after the checkbox has been applied.
   */
  facets: { [key in ItemKey]: number };
  /**
   * Callback function that is triggered after any checkbox has been clicked.
   * @param item: contains the modified checkbox with the new value
   * @param newFilterState: contains the new state of the whole filter group
   */
  onApply: (
    item: { key: ItemKey; isChecked: boolean },
    newFilterState: { [key in ItemKey]: boolean }
  ) => void;
};

const addThousandSeparatorToNumber = (value: number) => {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1’');
};

function CheckboxFilter<ItemKey extends string>({
  name,
  items,
  checked,
  facets,
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
              <chakra.span
                w="full"
                display="flex"
                justifyContent="space-between"
              >
                <chakra.span>{item.label}</chakra.span>
                <chakra.span>
                  {addThousandSeparatorToNumber(facets[item.key])}
                </chakra.span>
              </chakra.span>
            }
            onChange={(event) => {
              const isChecked = event.target.checked;
              onApply(
                { key: item.key, isChecked },
                { ...checked, [item.key]: isChecked }
              );
            }}
            isDisabled={facets[item.key] === 0 && !checked[item.key]}
            isChecked={checked[item.key]}
          />
        );
      })}
    </Stack>
  );
}

export default CheckboxFilter;
