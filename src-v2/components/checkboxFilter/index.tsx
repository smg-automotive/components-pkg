import React, { Fragment } from 'react';

import TranslationProvider from '../translationProvider';

import GridItem from '../grid/GridItem';
import Grid from '../grid';
import Divider from '../divider';
import { type Props } from './type';
import CheckboxWithFacet from './CheckboxWithFacet';
import CheckboxGroupCollapsibleWithChildren from './CheckboxGroupCollapsibleWithChildren';

const groupItems = <ItemKey extends string, FilterName extends string>(
  items: Props<ItemKey, FilterName>['items'],
  numberOfColumns = 1,
) => {
  const groupedItems = [];
  const itemsPerColumn = Math.ceil(items.length / numberOfColumns);

  for (let i = 0; i < numberOfColumns; i++) {
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;
    groupedItems.push(items.slice(start, end));
  }

  return groupedItems;
};

function CheckboxFilter<ItemKey extends string, FilterName extends string>({
  alwaysExpanded = false,
  items,
  onApply,
  numberOfColumnsOnDesktop = 1,
  onToggleCheckboxGroup,
  language,
}: Props<ItemKey, FilterName>) {
  const hasGroups = items.some(
    (item) => (item.childCheckboxes ?? []).length > 0,
  );
  const groupedItems = groupItems(items, numberOfColumnsOnDesktop);

  return (
    <TranslationProvider language={language} scopes={['checkboxFilter']}>
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          md: `repeat(${numberOfColumnsOnDesktop}, 1fr)`,
        }}
        gap={{ md: '4xl' }}
      >
        {groupedItems.map((columnItems, columnIndex) => (
          <GridItem key={columnIndex} data-testid="column" position="relative">
            {groupedItems.length - 1 !== columnIndex && (
              <Divider
                position="absolute"
                top={0}
                right="-1.5rem"
                width="1px"
                height="full"
                bg="gray.100"
              />
            )}
            {columnItems.map((item) => (
              <Fragment key={item.key}>
                {item.childCheckboxes && item.childCheckboxes.length > 0 ? (
                  <CheckboxGroupCollapsibleWithChildren
                    alwaysExpanded={alwaysExpanded}
                    item={item}
                    onApply={onApply}
                    onToggleCheckboxGroup={onToggleCheckboxGroup}
                  />
                ) : (
                  <CheckboxWithFacet
                    item={item}
                    onApply={onApply}
                    indentFacet={hasGroups && !alwaysExpanded}
                  />
                )}
              </Fragment>
            ))}
          </GridItem>
        ))}
      </Grid>
    </TranslationProvider>
  );
}
export default CheckboxFilter;
export { type Props };
