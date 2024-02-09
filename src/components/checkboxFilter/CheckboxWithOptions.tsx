import React, { ReactNode } from 'react';

import { Box, chakra } from '@chakra-ui/react';

import HighlightedText from '../text/HighlightedText';
import Checkbox from '../checkbox';
import { Item, State } from './type';

const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};

type Props<ItemKey extends string> = {
  item: Item<ItemKey>;
  items: Item<ItemKey>[];
  onApply: (updatedItem: Item<ItemKey>, newState: State<ItemKey>) => void;
  icon?: ReactNode;
  isCollapsible?: boolean;
  isIndeterminate?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
};

function CheckboxWithOptions<ItemKey extends string>({
  item,
  items,
  onApply,
  icon,
  isCollapsible,
  isIndeterminate,
  isInvalid,
  isDisabled,
}: Props<ItemKey>) {
  const isNested = !item.isParent && isCollapsible;
  return (
    <Box
      width="full"
      marginBottom="lg"
      display="flex"
      pl={isNested ? 'lg' : '0px'}
      pr={isNested ? '2xl' : '0px'}
    >
      <Checkbox
        variant={item.image ? 'alignCenter' : 'alignTop'}
        name={`filter_${item.key}_${item.label}`}
        isChecked={item.isChecked}
        value={item.key}
        fullWidth
        isIndeterminate={isIndeterminate}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
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

          const newState = items.reduce<Partial<State<ItemKey>>>(
            (acc, currentItem) => {
              if (item.isParent) {
                acc[currentItem.key] = isChecked;
                return acc;
              } else {
                acc[currentItem.key] = currentItem.isChecked;
                return acc;
              }
            },
            {},
          );

          onApply(
            { ...item, isChecked },
            {
              ...(item.isParent ? newState : previousState),
              [item.key]: isChecked,
            },
          );
        }}
      />
      {icon ? icon : null}
    </Box>
  );
}
export default CheckboxWithOptions;
