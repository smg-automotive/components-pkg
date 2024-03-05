import React from 'react';

import { Box, Grid } from '@chakra-ui/react';

import TranslationProvider from '../translationProvider';

import Divider from '../divider';
import { Props } from './type';
import CheckboxWithFacet from './CheckboxWithFacet';
import CheckboxGroupCollapsibleWithChildren from './CheckboxGroupCollapsibleWithChildren';

function CheckboxFilter<ItemKey extends string, FilterName extends string>({
  items,
  onApply,
  numberOfColumnsOnDesktop = 1,
  onToggleCheckboxGroup,
  language,
}: Props<ItemKey, FilterName>) {
  const hasGroups = items.some(
    (item) => (item.childCheckboxes ?? []).length > 0
  );

  const itemsPerColumn = Math.ceil(items.length / numberOfColumnsOnDesktop);

  const numberOfColumns =
    items.length < numberOfColumnsOnDesktop
      ? items.length || 1
      : items.length / numberOfColumnsOnDesktop;

  const groupItemsByColumns = Array.from(
    {
      length: numberOfColumns,
    },
    (_, columnIndex) => {
      const columnStartIndex = columnIndex * itemsPerColumn;
      const columnEndIndex = Math.min(
        (columnIndex + 1) * itemsPerColumn,
        items.length
      );
      return [...items].slice(columnStartIndex, columnEndIndex);
    }
  );

  return (
    <TranslationProvider language={language} scopes={['checkboxFilter']}>
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          md: `repeat(${numberOfColumnsOnDesktop}, 1fr)`,
        }}
        gap="4xl"
      >
        {groupItemsByColumns.map((columnItems, columnIndex) => (
          <Box key={columnIndex} data-testid="column" position="relative">
            {groupItemsByColumns.length - 1 !== columnIndex && (
              <Divider
                position="absolute"
                top={0}
                right="-1.5rem"
                width="1px"
                height="100%"
                bg="gray.100"
              />
            )}
            {columnItems.map((item) => (
              <Box key={item.key} data-testid={`item-${item.key}`}>
                {item.childCheckboxes && item.childCheckboxes.length > 0 ? (
                  <CheckboxGroupCollapsibleWithChildren
                    item={item}
                    onApply={onApply}
                    onToggleCheckboxGroup={onToggleCheckboxGroup}
                  />
                ) : (
                  <CheckboxWithFacet
                    item={item}
                    onApply={onApply}
                    indentFacet={hasGroups}
                  />
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Grid>
    </TranslationProvider>
  );
}
export default CheckboxFilter;
