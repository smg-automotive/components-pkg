import React, { ReactNode } from 'react';

import { chakra } from '@chakra-ui/react';

import { HighlightedText } from '../text/HighlightedText';
import { GridItem } from '../grid';
import { Grid } from '../grid';
import { Checkbox } from '../checkbox';
import { Props as CheckboxFilterProps, Item } from './type';

const addThousandSeparatorToNumber = (value: number) => {
  return new Intl.NumberFormat('de-CH').format(value);
};

type Props<ItemKey extends string, FilterName extends string> = {
  item: Item<ItemKey, FilterName>;
  isIndeterminate?: boolean;
  indentFacet?: boolean;
  contentRight?: ReactNode;
} & Pick<CheckboxFilterProps<ItemKey, FilterName>, 'onApply'>;

export function CheckboxWithFacet<
  ItemKey extends string,
  FilterName extends string,
>({
  item,
  onApply,
  contentRight,
  isIndeterminate = false,
  indentFacet = false,
}: Props<ItemKey, FilterName>) {
  const renderFacet = (facet?: number | null) => {
    if (typeof facet !== 'number') return null;
    return (
      <chakra.span
        ml="sm"
        color="gray.400"
        style={{ minWidth: '7ch' }}
        textAlign="right"
      >
        {addThousandSeparatorToNumber(facet)}
      </chakra.span>
    );
  };

  return (
    <Grid
      width="full"
      marginBottom="lg"
      templateColumns={contentRight || indentFacet ? '1fr 34px' : '1fr'}
    >
      <Checkbox
        variant={item?.image ? 'alignCenter' : 'alignTop'}
        name={`filter_${item.key}_${item.label}`}
        checked={isIndeterminate ? 'indeterminate' : item.isChecked}
        value={item.key}
        fullWidth
        label={
          item?.image ? (
            <chakra.span display="flex" alignItems="center" width="full">
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
                {renderFacet(item.facet)}
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
                wordBreak="break-word"
              />
              {renderFacet(item.facet)}
            </chakra.span>
          )
        }
        onChange={(details) => {
          const isChecked = details.checked === true;
          onApply({ ...item, isChecked });
        }}
      />

      {contentRight ? <GridItem ml="sm">{contentRight}</GridItem> : null}
    </Grid>
  );
}
