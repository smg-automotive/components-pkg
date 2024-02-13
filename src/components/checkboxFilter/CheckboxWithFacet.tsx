import React, { ReactNode } from 'react';

import { Box, chakra } from '@chakra-ui/react';

import HighlightedText from '../text/HighlightedText';
import Checkbox from '../checkbox';
import { Props as CheckboxFilterProps, Item } from './type';

const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};

type Props<ItemKey extends string, FilterName extends string> = {
  item: Item<ItemKey, FilterName>;
  isIndeterminate?: boolean;
  indentFacet?: boolean;
  icon?: ReactNode;
} & Pick<CheckboxFilterProps<ItemKey, FilterName>, 'onApply'>;

function CheckboxWithFacet<ItemKey extends string, FilterName extends string>({
  item,
  onApply,
  icon,
  isIndeterminate = false,
  indentFacet = false,
}: Props<ItemKey, FilterName>) {
  return (
    <Box width="full" marginBottom="lg" display="flex">
      <Checkbox
        variant={item?.image ? 'alignCenter' : 'alignTop'}
        name={`filter_${item.key}_${item.label}`}
        isChecked={item.isChecked}
        value={item.key}
        fullWidth
        isIndeterminate={isIndeterminate}
        label={
          item?.image ? (
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
                <chakra.span
                  ml="sm"
                  mr={indentFacet ? '2xl' : 0}
                  color="gray.400"
                >
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
              <chakra.span
                ml="sm"
                mr={indentFacet ? '2xl' : 0}
                color="gray.400"
              >
                {addThousandSeparatorToNumber(item.facet)}
              </chakra.span>
            </chakra.span>
          )
        }
        onChange={(event) => {
          const isChecked = event.target.checked;
          onApply({ ...item, isChecked });
        }}
      />
      {icon ? icon : null}
    </Box>
  );
}
export default CheckboxWithFacet;