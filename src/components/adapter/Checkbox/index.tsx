import React, { FC } from 'react';
import { CheckboxCheckedChangeDetails } from '@chakra-ui/react';

import {
  CheckboxProps,
  Checkbox as ComponentsCheckbox,
} from 'src/components/checkbox';

type Props = Omit<
  CheckboxProps,
  'checked' | 'disabled' | 'onChange' | 'invalid'
> & {
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = (props) => {
  const { isChecked, isDisabled, isInvalid, onChange, name, value, ...rest } =
    props;

  const handleChange = (details: CheckboxCheckedChangeDetails) => {
    if (!onChange) return;

    const checked = details.checked === true;

    const target = {
      type: 'checkbox',
      name,
      value: value ?? 'on',
      checked,
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
      name={name}
      checked={isChecked}
      disabled={isDisabled}
      onChange={handleChange}
      invalid={isInvalid}
    />
  );
};
