import React from 'react';

import { useI18n } from '@smg-automotive/i18n-pkg';

import { Box, Collapse, IconButton, useDisclosure } from '@chakra-ui/react';

import { ChevronDownLargeIcon } from '../icons';
import { Item, Props } from './type';
import CheckboxWithFacet from './CheckboxWithFacet';

interface CheckboxCollapsibleProps<
  ItemKey extends string,
  FilterName extends string
> {
  item: Item<ItemKey, FilterName>;
  onApply: (updatedItem: Item<ItemKey, FilterName>) => void;
  onToggleCheckboxGroup: Props<ItemKey, FilterName>['onToggleCheckboxGroup'];
}

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

  return (
    <>
      <Box width="full" display="flex" alignItems="center">
        <CheckboxWithFacet
          item={item}
          onApply={onApply}
          aria-expanded={isOpen ? 'Collapsed' : 'Expanded'}
          isIndeterminate={
            numberOfAppliedChildren > 0 &&
            numberOfAppliedChildren < checkboxes.length
          }
          icon={
            <IconButton
              aria-controls="checkboxCollapsibleBox"
              aria-expanded={isOpen}
              aria-label={`${
                isOpen
                  ? t('chevronExpandCollapseButton.collapse')
                  : t('chevronExpandCollapseButton.expand')
              } ${item.label}`}
              onClick={() => {
                onToggle();
                onToggleCheckboxGroup?.(item);
              }}
              icon={
                <ChevronDownLargeIcon
                  w="xs"
                  h="xs"
                  transition="0.2s"
                  color="gray.500"
                  ml="sm"
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                  boxSize={18}
                  cursor="pointer"
                />
              }
            />
          }
        />
      </Box>
      <Collapse in={isOpen}>
        <Box
          id="checkboxCollapsibleBox"
          pl={checkboxes.length > 0 ? 'lg' : '0px'}
          pr={checkboxes.length > 0 ? '2xl' : '0px'}
        >
          {checkboxes?.map((checkbox) => (
            <CheckboxWithFacet
              key={checkbox.key}
              item={{
                ...checkbox,
                isChecked: item.isChecked ? true : checkbox.isChecked,
              }}
              onApply={onApply}
              isIndeterminate={false}
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
