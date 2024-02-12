import React from 'react';

import { Box } from '@chakra-ui/react';

import CheckboxCollapsible from './CheckboxGroupCollapsible';
import { Props } from './type';
import CheckboxWithOptions from './CheckboxWithOptions';

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
        if (item.childCheckboxes.length > 0)
          return (
            <CheckboxCollapsible
              key={item.parent.key}
              checkboxes={item.childCheckboxes}
              parentItem={item.parent}
              onApply={onApply}
            />
          );
        return (
          <CheckboxWithOptions
            key={item.parent.key}
            isIndeterminate={false}
            item={item.parent}
            onApply={onApply}
          />
        );
      })}
    </Box>
  );
}
export default CheckboxFilter;
