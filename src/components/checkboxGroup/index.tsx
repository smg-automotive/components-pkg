import React, { FC } from 'react';

import { Box } from '@chakra-ui/react';

import Stack from '../stack';
import Divider from '../divider';
import Checkbox, { CheckboxProps } from '../checkbox';

interface CheckboxGroupProps extends CheckboxProps {
  checkboxes?: CheckboxProps[];
  addDividerAfterIndex?: number[];
  size?: 'sm' | 'lg';
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
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
  checkboxes,
}) => {
  return (
    <Stack spacing="md">
      <Checkbox
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        isChecked={isChecked}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isIndeterminate={isIndeterminate}
        size={size}
        fontWeight="bold"
      />

      {checkboxes?.map((item, index) => (
        <>
          <Box
            as={Checkbox}
            {...item}
            size={size}
            pl="md"
            isDisabled={isDisabled}
            key={item.name}
          />
          {addDividerAfterIndex?.includes(index) ? <Divider /> : null}
        </>
      ))}
    </Stack>
  );
};
CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
