import React from 'react';

import { Box } from '@chakra-ui/react';

import TranslationProvider from '../translationProvider';

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
    (item) => (item.childCheckboxes ?? []).length > 0,
  );

  // Calculate number of items per column
  const itemsPerColumn = Math.ceil(items.length / numberOfColumnsOnDesktop);

  // Create an array to store items grouped by columns
  const columns = Array.from(
    { length: numberOfColumnsOnDesktop },
    (_, columnIndex) => {
      const columnStartIndex = columnIndex * itemsPerColumn;
      const columnEndIndex = Math.min(
        (columnIndex + 1) * itemsPerColumn,
        items.length,
      );
      return items.slice(columnStartIndex, columnEndIndex);
    },
  );

  return (
    <TranslationProvider language={language} scopes={['checkboxFilter']}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            base: '1fr',
            md: `repeat(${numberOfColumnsOnDesktop}, 1fr)`,
          },
          gap: 'var(--chakra-space-4xl)',
        }}
      >
        {columns.map((columnItems, columnIndex) => (
          <div key={columnIndex}>
            {columnItems.map((item) => (
              <div key={item.key}>
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
              </div>
            ))}
          </div>
        ))}
      </Box>
    </TranslationProvider>
  );
}
export default CheckboxFilter;
