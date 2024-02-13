import React from 'react';

import { Box } from '@chakra-ui/react';

import { Props } from './type';
import CheckboxWithOptions from './CheckboxWithOptions';
import CheckboxCollapsible from './CheckboxGroupCollapsible';

function CheckboxFilter<ItemKey extends string, FilterName extends string>({
  items,
  onApply,
  numberOfColumnsOnDesktop = 1,
}: Props<ItemKey, FilterName>) {
  return (
    <Box
      sx={{
        columns: { md: numberOfColumnsOnDesktop, base: 1 },
        columnRule: 'solid var(--chakra-colors-gray-100) 1px',
        columnGap: 'var(--chakra-space-4xl)',
      }}
    >
      {items.map((item) => {
        if (item.childCheckboxes && item.childCheckboxes.length > 0)
          // TODO: rename to CheckboxCollapsibleWithChildren
          return (
            <CheckboxCollapsible
              key={item.key}
              // TODO: can be removed since it's part of item
              checkboxes={item.childCheckboxes}
              parentItem={item}
              onApply={onApply}
            />
          );
        // TODO: rename to CheckboxWithFacet
        return (
          <CheckboxWithOptions key={item.key} item={item} onApply={onApply} />
        );
      })}
    </Box>
  );
}
export default CheckboxFilter;
