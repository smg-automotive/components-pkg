import React, { FC, Fragment } from 'react';

import { Box, Collapse } from '@chakra-ui/react';

import Stack from '../stack';
import { ChevronDownLargeIcon } from '../icons';
import Flex from '../flex';
import Divider from '../divider';
import Checkbox, { CheckboxProps } from '../checkbox';

interface CheckboxCollapsibleProps extends CheckboxProps {
  checkboxes?: CheckboxProps[];
  addDividerAfterIndex?: number[];
  size?: 'sm' | 'lg';
}

const CheckboxCollapsible: FC<CheckboxCollapsibleProps> = ({
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
  const isOpen = isIndeterminate || isChecked;
  return (
    <Stack spacing="md">
      <Flex alignItems="center">
        <Checkbox
          name={name}
          label={
            <>
              {label}
              <ChevronDownLargeIcon
                w="xs"
                h="xs"
                transition="0.2s"
                transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                marginLeft={20}
                boxSize={18}
              />
            </>
          }
          value={value}
          onChange={onChange}
          isChecked={isChecked}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isIndeterminate={isIndeterminate}
          size={size}
          variant={variant}
          fontWeight="bold"
        />
      </Flex>
      <Collapse in={isOpen}>
        <Stack spacing="md">
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
CheckboxCollapsible.displayName = 'CheckboxCollapsible';

export default CheckboxCollapsible;
