import React, { FC, Fragment } from 'react';

import { Box } from '@chakra-ui/react';

import { Stack } from '../stack';
import { Separator } from '../separator';
import { Checkbox, CheckboxProps } from '../checkbox';

export interface CheckboxGroupProps extends CheckboxProps {
  /**
   * Array of children checkboxes
   */
  checkboxes?: CheckboxProps[];
  addDividerAfterIndex?: number[];
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  label,
  value,
  onChange,
  checked,
  disabled,
  invalid,
  indeterminate,
  addDividerAfterIndex,
  variant = 'alignCenter',
  checkboxes,
}) => {
  return (
    <Stack gap="md">
      <Checkbox
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        invalid={invalid}
        indeterminate={indeterminate}
        variant={variant}
        fontWeight="bold"
      />

      {checkboxes?.map((item, index) => (
        <Fragment key={item.name}>
          <Box ps="md" asChild>
            <Checkbox
              name={item.name}
              label={item.label}
              value={item.value}
              onChange={item.onChange}
              checked={item.checked}
              variant={variant}
              disabled={disabled}
            />
          </Box>
          {addDividerAfterIndex?.includes(index) ? (
            <Separator orientation="horizontal" />
          ) : null}
        </Fragment>
      ))}
    </Stack>
  );
};
CheckboxGroup.displayName = 'CheckboxGroup';
