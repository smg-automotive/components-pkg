import React from 'react';

import { useI18n } from '@smg-automotive/i18n-pkg';

import { Box, Collapse, IconButton, useDisclosure } from '@chakra-ui/react';

import { ChevronDownLargeIcon } from '../icons';
import { Item, Props } from './type';
import CheckboxWithFacet from './CheckboxWithFacet';

type CheckboxCollapsibleProps<
  ItemKey extends string,
  FilterName extends string
> = {
  item: Item<ItemKey, FilterName>;
} & Pick<Props<ItemKey, FilterName>, 'onApply' | 'onToggleCheckboxGroup'>;

function CheckboxGroupCollapsibleWithChildren<
  ItemKey extends string,
  FilterName extends string
>({
  item,
  onApply,
  onToggleCheckboxGroup,
}: CheckboxCollapsibleProps<ItemKey, FilterName>) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  const { t } = useI18n();
  const checkboxes = item.childCheckboxes ?? [];
  const numberOfAppliedChildren = checkboxes.filter(
    (checkbox) => checkbox.isChecked
  ).length;
  const groupDomId = `checkbox-group-${item.key}-${item.filterName ?? ''}`;

  return (
    <>
      <Box width="full" display="flex" alignItems="center">
        <CheckboxWithFacet
          item={item}
          onApply={onApply}
          aria-expanded={isOpen}
          isIndeterminate={
            numberOfAppliedChildren > 0 &&
            numberOfAppliedChildren < checkboxes.length
          }
          contentRight={
            <IconButton
              aria-controls={groupDomId}
              aria-expanded={isOpen}
              aria-label={`${item.label}: ${
                isOpen
                  ? t('checkboxFilter.expanded')
                  : t('checkboxFilter.collapsed')
              }`}
              onClick={() => {
                onToggle();
                onToggleCheckboxGroup?.(item);
              }}
              w="full"
              h="full"
              display="flex"
              justifyContent="flex-end"
              icon={
                <ChevronDownLargeIcon
                  w="xs"
                  h="xs"
                  transition="0.2s"
                  color="gray.500"
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                  cursor="pointer"
                />
              }
            />
          }
        />
      </Box>
      <Collapse in={isOpen}>
        <Box id={groupDomId} ml={checkboxes.length > 0 ? 'lg' : '0px'}>
          {checkboxes?.map((checkbox) => (
            <CheckboxWithFacet
              key={checkbox.key}
              item={{
                ...checkbox,
                // to force checked on children when parent is checked
                isChecked: item.isChecked ? true : checkbox.isChecked,
              }}
              onApply={onApply}
              isIndeterminate={false}
              indentFacet={true}
            />
          ))}
        </Box>
      </Collapse>
    </>
  );
}
CheckboxGroupCollapsibleWithChildren.displayName =
  'CheckboxGroupCollapsibleWithChildren';

export default CheckboxGroupCollapsibleWithChildren;
