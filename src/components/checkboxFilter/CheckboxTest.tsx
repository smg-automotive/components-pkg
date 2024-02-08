import React from 'react';

import { Box, chakra } from '@chakra-ui/react';

import HighlightedText from '../text/HighlightedText';
import Checkbox from '../checkbox';
import { Props } from './types';

const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};

function CheckboxTest<ItemKey extends string>({
  name,
  item,
  isCollapsible = false,
  isParent = false,
  isIndeterminate = false,
  onParentChange,
  icon,
  isDisabled,
  isInvalid,
}: Props<ItemKey>) {
  const onChange = onParentChange ?? item.onChange;
  return (
    <Box
      width="full"
      marginBottom="lg"
      pl={isCollapsible && !isParent ? 'lg' : '0px'}
      pr={isCollapsible && !isParent ? '2xl' : '0px'}
      display={isCollapsible ? 'flex' : 'block'}
    >
      <Checkbox
        isIndeterminate={isIndeterminate}
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
        onChange={onChange}
        isChecked={item.isChecked}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        value={item.key}
        fullWidth
      />
      {icon ? icon : null}
    </Box>
  );
}
export default CheckboxTest;
