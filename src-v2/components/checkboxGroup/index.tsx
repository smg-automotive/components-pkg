import React, { FC, Fragment } from 'react';

import { Box } from '@chakra-ui/react';

import Stack from '../stack';
import Divider from '../divider';
import Checkbox, { CheckboxProps } from '../checkbox';

export interface CheckboxGroupProps extends CheckboxProps {
  /**
   * Array of children checkboxes
   */
  checkboxes?: CheckboxProps[];
  addDividerAfterIndex?: number[];
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  label,
  value,
  onChange,
  isChecked,
  isDisabled,
  isInvalid,
  isIndeterminate,
  addDividerAfterIndex,
  variant = 'alignCenter',
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
        variant={variant}
        fontWeight="bold"
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
