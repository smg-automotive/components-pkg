import React, { FC, Fragment } from 'react';

import { Box } from '@chakra-ui/react';

import Stack from '../stack';
import Divider from '../divider';
import Checkbox, { CheckboxProps } from '../checkbox';

interface CheckboxGroupProps extends CheckboxProps {
  checkboxes?: CheckboxProps[];
  addDividerAfterIndex?: number[];
  size?: 'sm' | 'lg';
  variant?: 'allignCenter' | 'allignTop';
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
  variant = 'allignCenter',
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
        variant={variant}
      />

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
  );
};
CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
