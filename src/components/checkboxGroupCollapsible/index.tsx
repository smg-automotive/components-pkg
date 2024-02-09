import React, { Fragment } from 'react';

import { Box, Collapse, IconButton, useDisclosure } from '@chakra-ui/react';

import Stack from '../stack';
import { ChevronDownLargeIcon } from '../icons';
import Divider from '../divider';
import { Item, State } from '../checkboxFilter/type';
import CheckboxWithOptions from '../checkboxFilter/CheckboxWithOptions';

interface CheckboxCollapsibleProps<ItemKey extends string> {
  checkboxes: Item<ItemKey>[];
  addDividerAfterIndex?: number[];
  isDisabled?: boolean;
  isInvalid?: boolean;
  isIndeterminate?: boolean;
  size?: 'sm' | 'lg';
  fontWeight?: 'regular' | 'bold';
  parent: Item<ItemKey>;
  onApply: (updatedItem: Item<ItemKey>, newState: State<ItemKey>) => void;
  isCollapsible?: boolean;
  isParentChecked: boolean;
  highlightIndices?: ReadonlyArray<[number, number]>;
  onParentChange?: (newState: State<ItemKey>) => void;
}

function CheckboxCollapsible<ItemKey extends string>({
  parent,
  checkboxes,
  onApply,
  isParentChecked,
  isCollapsible,
  isIndeterminate,
  isInvalid,
  isDisabled,
  addDividerAfterIndex,
}: CheckboxCollapsibleProps<ItemKey>) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  return (
    <Stack spacing="md">
      <Box width="full" display="flex" alignItems="center">
        <CheckboxWithOptions
          isCollapsible={isCollapsible}
          item={{ ...parent, isParent: true, isChecked: isParentChecked }}
          items={checkboxes}
          onApply={onApply}
          isIndeterminate={isIndeterminate}
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          icon={
            <IconButton
              aria-label={isOpen ? 'Collapse' : 'Expand'}
              icon={
                <ChevronDownLargeIcon
                  w="xs"
                  h="xs"
                  transition="0.2s"
                  color="gray.500"
                  ml="sm"
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                  boxSize={18}
                  onClick={onToggle}
                  cursor="pointer"
                />
              }
            />
          }
        />
      </Box>
      <Collapse in={isOpen}>
        <Stack spacing="lg">
          {checkboxes?.map((item, index) => (
            <Fragment key={item.key}>
              <CheckboxWithOptions
                item={item}
                items={checkboxes}
                onApply={onApply}
                isCollapsible={isCollapsible}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
              />
              {addDividerAfterIndex?.includes(index) ? <Divider /> : null}
            </Fragment>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
CheckboxCollapsible.displayName = 'CheckboxCollapsible';

export default CheckboxCollapsible;
