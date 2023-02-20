import React, { FC } from 'react';

import { chakra } from '@chakra-ui/react';

import Flex from '../flex';
import Checkbox from '../checkbox';
import Box from '../box';

interface Item {
  value: string | number;
  label: string;
}

export interface Props {
  name: string;
  options: Item[];
  selected?: (string | number)[];
  onSelect?: (value: string | number) => void;
  facet?: { [key: string]: number };
  apply: (filtersToApply: unknown) => void;
}

const CheckboxFilter: FC<Props> = ({
  name,
  options,
  selected = [],
  onSelect,
  facet,
  apply: applyFilters,
}) => {
  const values = options.map(({ value }) => value);

  const selectValue = (value: string | number) => () => {
    const selectionCopy = [...selected];

    if (onSelect) {
      onSelect(value);
    }

    if (selectionCopy.includes(value)) {
      const i = selectionCopy.indexOf(value);
      selectionCopy.splice(i, 1);
    } else {
      selectionCopy.push(value);
    }

    selectionCopy.sort((a, b) =>
      values.indexOf(a) < values.indexOf(b) ? -1 : 1
    );

    applyFilters({ [name]: selectionCopy });
  };

  const renderOption = ({ value, label }: Item) => {
    const isSelected = selected.includes(value);
    const resultsCount = facet?.[value.toString()] || 0;
    const hasFacet = !!facet;
    const isDisabled = hasFacet && resultsCount === 0 && !isSelected;

    return (
      <Box key={`filter_${name}_${value}`}>
        <Checkbox
          name={`filter_${name}_${value}`}
          label={
            <Flex width="5xl" justifyContent="space-between">
              <chakra.span>{label}</chakra.span>
              {hasFacet && (
                <chakra.span>
                  {resultsCount
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1’')}
                </chakra.span>
              )}
            </Flex>
          }
          onChange={selectValue(value)}
          isDisabled={isDisabled}
          isChecked={isSelected}
        />
      </Box>
    );
  };
  return <Box>{options.map(renderOption)}</Box>;
};

export default CheckboxFilter;
