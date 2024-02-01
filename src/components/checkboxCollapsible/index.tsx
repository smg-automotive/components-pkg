import React, { FC, Fragment, useState } from 'react';

import { Box, Collapse } from '@chakra-ui/react';

import Stack from '../stack';
import { ChevronDownLargeIcon } from '../icons';
import Flex from '../flex';
import Divider from '../divider';
import Checkbox, { CheckboxProps } from '../checkbox';
import CollapsibleCheckbox from './CollapsibleCheckbox';

interface CollapsibleCheckboxGroupProps extends CheckboxProps {
  checkboxes?: CheckboxProps[];
  addDividerAfterIndex?: number[];
  size?: 'sm' | 'lg';
}

const CollapsibleCheckboxGroup: FC<CollapsibleCheckboxGroupProps> = ({
  name,
  label,
  value,
  onChange,
  isChecked,
  isDisabled,
  isInvalid,
  size = 'lg',
  isIndeterminate,
  addDividerAfterIndex,
  variant = 'alignCenter',
  checkboxes,
}) => {
  const [isOpen, setIsOpen] = useState(isIndeterminate || isChecked);
  return (
    <Stack spacing="lg">
      <Flex alignItems="center">
        <CollapsibleCheckbox
          name={name}
          icon={
            <ChevronDownLargeIcon
              w="xs"
              h="xs"
              transition="0.2s"
              color="gray.500"
              transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
              marginLeft={20}
              boxSize={18}
              onClick={() => setIsOpen(!isOpen)}
              cursor="pointer"
            />
          }
          label={label}
          value={value}
          onChange={onChange}
          isChecked={isChecked}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isIndeterminate={isIndeterminate}
          size={size}
          variant={variant}
        />
      </Flex>
      <Collapse in={isOpen}>
        <Stack spacing="lg">
          {checkboxes?.map((item, index) => (
            <Fragment key={item.name}>
              <Box
                as={Checkbox}
                name={item.name}
                label={item.label}
                value={item.value}
                onChange={item.onChange}
                isChecked={item.isChecked}
                size={size}
                pl="md"
                variant={variant}
                isDisabled={isDisabled}
              />
              {addDividerAfterIndex?.includes(index) ? <Divider /> : null}
            </Fragment>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
CollapsibleCheckboxGroup.displayName = 'CollapsibleCheckboxGroup';

export default CollapsibleCheckboxGroup;
