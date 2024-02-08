import React from 'react';

import { Box } from '@chakra-ui/react';

import { Item, Props } from './types';
import CheckboxTest from './CheckboxTest';

function CheckboxFilter<ItemKey extends string>({
  name,
  items,
  numberOfColumnsOnDesktop = 1,
  icon,
}: Props<ItemKey> & { items: Item<ItemKey>[] }) {
  return (
    <Box
      sx={{
        columns: { md: numberOfColumnsOnDesktop, base: 1 },
        columnRule: 'solid var(--chakra-colors-gray-100) 1px',
        columnGap: 'var(--chakra-space-4xl)',
      }}
    >
      {items?.map((item) => {
        return (
          <CheckboxTest key={item.key} item={item} name={name} icon={icon} />
        );
      })}
    </Box>
  );
}
export default CheckboxFilter;
