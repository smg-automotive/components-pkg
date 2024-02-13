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
  return (
    <TranslationProvider language={language} scopes={['checkboxFilter']}>
      <Box
        sx={{
          columns: { md: numberOfColumnsOnDesktop, base: 1 },
          columnRule: 'solid var(--chakra-colors-gray-100) 1px',
          columnGap: 'var(--chakra-space-4xl)',
        }}
      >
        {items.map((item) => {
          if (item.childCheckboxes && item.childCheckboxes.length > 0)
            return (
              <CheckboxGroupCollapsibleWithChildren
                key={item.key}
                item={item}
                onApply={onApply}
                onToggleCheckboxGroup={onToggleCheckboxGroup}
              />
            );
          return (
            <CheckboxWithFacet
              key={item.key}
              item={item}
              onApply={onApply}
              indentFacet={hasGroups}
            />
          );
        })}
      </Box>
    </TranslationProvider>
  );
}
export default CheckboxFilter;
