import React from 'react';

import { useI18n } from '@smg-automotive/i18n-pkg';

import { Box, Collapse, IconButton, useDisclosure } from '@chakra-ui/react';

import Stack from '../stack';
import { ChevronDownLargeIcon } from '../icons';
import { Item } from './type';
import CheckboxWithOptions from './CheckboxWithOptions';

interface CheckboxCollapsibleProps<
  ItemKey extends string,
  FilterName extends string
> {
  parentItem: Item<ItemKey, FilterName>;
  onApply: (updatedItem: Item<ItemKey, FilterName>) => void;
  onToggleGroup?: () => void;
}

function CheckboxCollapsible<
  ItemKey extends string,
  FilterName extends string
>({
  parentItem,
  onApply,
  onToggleGroup,
}: CheckboxCollapsibleProps<ItemKey, FilterName>) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  const { t } = useI18n();
  const checkboxes = parentItem.childCheckboxes ?? [];
  const numberOfAppliedChildren = checkboxes.filter(
    (checkbox) => checkbox.isChecked
  ).length;

  return (
    <Stack spacing="md">
      <Box width="full" display="flex" alignItems="center">
        <CheckboxWithOptions
          item={parentItem}
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
              } ${parentItem.label}`}
              onClick={() => {
                onToggle();
                onToggleGroup?.();
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
          as={Stack}
          spacing="lg"
          pl={checkboxes.length > 0 ? 'lg' : '0px'}
          pr={checkboxes.length > 0 ? '2xl' : '0px'}
        >
          {checkboxes?.map((checkbox) => (
            <CheckboxWithOptions
              key={checkbox.key}
              item={{
                ...checkbox,
                isChecked: parentItem.isChecked ? true : checkbox.isChecked,
              }}
              onApply={onApply}
              isIndeterminate={false}
            />
          ))}
        </Box>
      </Collapse>
    </Stack>
  );
}
CheckboxCollapsible.displayName = 'CheckboxCollapsible';

export default CheckboxCollapsible;
