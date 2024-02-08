import React, { ReactNode } from 'react';

import { Box, chakra } from '@chakra-ui/react';

import HighlightedText from '../text/HighlightedText';
import Checkbox from '../checkbox';

type Item<ItemKey> = {
  key: ItemKey;
  label: string;
  facet: number;
  isChecked: boolean;
  image?: ReactNode;
  highlightIndices?: ReadonlyArray<[number, number]>;
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
  numberOfColumnsOnDesktop?: number;
};

const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};

function CheckboxFilter<ItemKey extends string>({
  name,
  items,
  onApply,
  numberOfColumnsOnDesktop = 1,
}: Props<ItemKey>) {
  return (
    <Box
      sx={{
        columns: { md: numberOfColumnsOnDesktop, base: 1 },
        columnRule: 'solid var(--chakra-colors-gray-100) 1px',
        columnGap: 'var(--chakra-space-4xl)',
      }}
    >
      {items.map((item) => {
        return (
          <Box key={item.key} width="full" marginBottom="lg">
            <Checkbox
              variant={item.image ? 'alignCenter' : 'alignTop'}
              name={`filter_${name}_${item.label}`}
              label={
                item.image ? (
                  <chakra.span display="flex" alignItems="center">
                    {item.image}
                    <chakra.span
                      w="full"
                      display="flex"
                      justifyContent="space-between"
                      marginLeft="sm"
                    >
                      <HighlightedText
                        text={item.label}
                        highlightIndices={item.highlightIndices}
                        wordBreak="break-word"
                      />
                      <chakra.span ml="sm" color="gray.400">
                        {addThousandSeparatorToNumber(item.facet)}
                      </chakra.span>
                    </chakra.span>
                  </chakra.span>
                ) : (
                  <chakra.span
                    width="full"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <HighlightedText
                      text={item.label}
                      highlightIndices={item.highlightIndices}
                      w="full"
                      wordBreak="break-word"
                    />
                    <chakra.span ml="sm" color="gray.400">
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
              isChecked={item.isChecked}
              value={item.key}
              fullWidth
            />
          </Box>
        );
      })}
    </Box>
  );
}
export default CheckboxFilter;
