import React from 'react';

import { Box } from '@chakra-ui/react';

import { Props } from './type';
import CheckboxWithOptions from './CheckboxWithOptions';

function CheckboxFilter<ItemKey extends string>({
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
          <CheckboxWithOptions
            key={item.key}
            item={item}
            items={items}
            onApply={onApply}
          />
        );
      })}
    </Box>
  );
}
export default CheckboxFilter;
