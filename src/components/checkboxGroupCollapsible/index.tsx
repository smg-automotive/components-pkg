import React from 'react';

import { useI18n } from '@smg-automotive/i18n-pkg';

import { Box, Collapse, IconButton, useDisclosure } from '@chakra-ui/react';

import Stack from '../stack';
import { ChevronDownLargeIcon } from '../icons';
import { Item } from '../checkboxFilter/type';
import CheckboxWithOptions from '../checkboxFilter/CheckboxWithOptions';

interface CheckboxCollapsibleProps<ItemKey extends string> {
  item: Item<ItemKey>;
  checkboxes: Item<ItemKey>[];
  onApply: (updatedItem: Item<ItemKey>) => void;
  onToggleGroup?: () => void;
}

function CheckboxCollapsible<ItemKey extends string>({
  item,
  checkboxes,
  onApply,
  onToggleGroup,
}: CheckboxCollapsibleProps<ItemKey>) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  const { t } = useI18n();
  const numberOfAppliedChildren = checkboxes.filter(
    (checkbox) => checkbox.isChecked
  ).length;

  return (
    <Stack spacing="md">
      <Box width="full" display="flex" alignItems="center">
        <CheckboxWithOptions
          item={item}
          onApply={onApply}
          aria-expanded={isOpen ? 'Collapsed' : 'Expanded'}
          isIndeterminate={
            numberOfAppliedChildren > 0 &&
            numberOfAppliedChildren < checkboxes.length
          }
          icon={
            <IconButton
              aria-expanded={isOpen}
              aria-label={`${
                isOpen
                  ? t('chevronExpandCollapseButton.collapse')
                  : t('chevronExpandCollapseButton.expand')
              } ${item.label}`}
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
                isChecked: item.isChecked ? true : checkbox.isChecked,
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
