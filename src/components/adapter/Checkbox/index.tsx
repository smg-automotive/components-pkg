import React, { forwardRef } from 'react';
import { CheckboxCheckedChangeDetails } from '@chakra-ui/react';

import {
  CheckboxProps,
  Checkbox as ComponentsCheckbox,
} from '@/src/components/checkbox';

type Props = Omit<
  CheckboxProps,
  'checked' | 'disabled' | 'onChange' | 'invalid'
> & {
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { isChecked, isDisabled, isInvalid, onChange, name, ...rest } = props;

  const handleChange = (details: CheckboxCheckedChangeDetails) => {
    if (!onChange) return;

    const checked = details.checked === true;

    const target = {
      type: 'checkbox',
      name,
      checked,
      value: '',
    } as HTMLInputElement;

    const syntheticEvent = {
      target,
      currentTarget: target,
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };

  return (
    <ComponentsCheckbox
      {...rest}
      ref={ref}
      name={name}
      value=""
      checked={!!isChecked}
      disabled={isDisabled}
      invalid={isInvalid}
      onChange={handleChange}
    />
  );
});

Checkbox.displayName = 'Checkbox';
