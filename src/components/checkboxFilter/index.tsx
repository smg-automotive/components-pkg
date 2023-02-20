import React from 'react';

import { chakra } from '@chakra-ui/react';

import Stack from '../stack';
import Checkbox from '../checkbox';

type Item<Option> = {
  value: Option;
  label: string;
};

type Props<Option extends string | number> = {
  /**
   * Name of the filter - only used on the DOM.
   */
  name: string;
  /**
   * @param Item: { value: Option, label: string }
   */
  options: Item<Option>[];
  /**
   * The checkbox filter is a controlled component and the updated filter value must be passed in order to see the correct state.
   */
  checked: { [key in Option]: boolean };
  /**
   * Numeric value shown next to the checkbox label. Indicates how many search results are going to be visible after the checkbox has been applied.
   */
  facets: { [key in Option]: number };
  /**
   * Callback function that is triggered after any checkbox has been clicked.
   * @param item: contains the modified checkbox with the new value
   * @param newFilterState: contains the new state of the whole filter group
   */
  onApply: (
    item: { value: Option; isChecked: boolean },
    newFilterState: { [key in Option]: boolean }
  ) => void;
};

const addThousandSeparatorToNumber = (value: number) => {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1’');
};

function CheckboxFilter<Option extends string | number>({
  name,
  options,
  checked,
  facets,
  onApply,
}: Props<Option>) {
  return (
    <Stack spacing="2xl">
      {options.map((option) => {
        return (
          <Checkbox
            key={`filter_${name}_${option.label}`}
            name={`filter_${name}_${option.label}`}
            label={
              <chakra.span
                w="full"
                display="flex"
                justifyContent="space-between"
              >
                <chakra.span>{option.label}</chakra.span>
                <chakra.span>
                  {addThousandSeparatorToNumber(facets[option.value])}
                </chakra.span>
              </chakra.span>
            }
            onChange={(event) => {
              const isChecked = event.target.checked;
              onApply(
                { value: option.value, isChecked },
                { ...checked, [option.value]: isChecked }
              );
            }}
            isDisabled={facets[option.value] === 0 && !checked[option.value]}
            isChecked={checked[option.value]}
          />
        );
      })}
    </Stack>
  );
}

export default CheckboxFilter;
