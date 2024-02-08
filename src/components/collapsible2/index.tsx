import React, { ChangeEvent, Fragment, ReactNode } from 'react';

import { Collapse, IconButton, useDisclosure } from '@chakra-ui/react';

import Stack from '../stack';
import { ChevronDownLargeIcon } from '../icons';
import Flex from '../flex';
import Divider from '../divider';
import { Item } from '../checkboxFilter/types';
import CheckboxTest from '../checkboxFilter/CheckboxTest';

type Props<ItemKey> = {
  name: string;
  items: Item<ItemKey>[];
  onParentChange: (event: ChangeEvent<HTMLInputElement>) => void;
  numberOfColumnsOnDesktop?: number;
  isCollapsible?: boolean;
  isParent?: boolean;
  icon?: ReactNode;
  isIndeterminate?: boolean;
  areAllChecked?: boolean;
  addDividerAfterIndex?: number[];
  isInvalid?: boolean;
  isDisabled?: boolean;
};

function Collapsible2<ItemKey extends string>({
  onParentChange,
  isIndeterminate,
  areAllChecked,
  name,
  items,
  addDividerAfterIndex,
  isCollapsible = false,
  isParent = false,
  isInvalid = false,
  isDisabled = false,
}: Props<ItemKey>) {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: isIndeterminate || areAllChecked,
  });

  return (
    <Stack spacing="lg">
      <Flex alignItems="center">
        <CheckboxTest
          onParentChange={onParentChange}
          name={name}
          item={items[0]}
          isCollapsible={isCollapsible}
          isIndeterminate={isIndeterminate}
          isParent={isParent}
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
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                  marginLeft={10}
                  boxSize={18}
                  onClick={onToggle}
                  cursor="pointer"
                />
              }
            />
          }
        />
      </Flex>
      <Collapse in={isOpen}>
        <Stack spacing="lg">
          {items?.map((checkboxItem, index) => (
            <Fragment key={checkboxItem.key}>
              <CheckboxTest
                name={name}
                item={checkboxItem}
                isCollapsible={isCollapsible}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
              />
              {addDividerAfterIndex?.includes(index) ? <Divider /> : null}
            </Fragment>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
Collapsible2.displayName = 'Collapsible2';

export default Collapsible2;
