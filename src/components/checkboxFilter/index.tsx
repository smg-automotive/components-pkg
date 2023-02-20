import React from 'react';

import { chakra } from '@chakra-ui/react';

import Stack from '../stack';
import Checkbox from '../checkbox';

type Item<Option> = {
  value: Option;
  label: string;
};

type Props<Option extends string | number> = {
  name: string;
  options: Item<Option>[];
  checked: { [key in Option]: boolean };
  facets: { [key in Option]: number };
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
