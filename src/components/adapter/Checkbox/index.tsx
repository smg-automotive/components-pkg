import React, { FC } from 'react';
import { CheckboxCheckedChangeDetails } from '@chakra-ui/react';

import {
  CheckboxProps,
  Checkbox as ComponentsCheckbox,
} from 'src/components/checkbox';

type Props = Omit<CheckboxProps, 'checked' | 'disabled' | 'onChange'> & {
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = (props) => {
  const { isChecked, isDisabled, onChange, ...rest } = props;

  const handleChange = (details: CheckboxCheckedChangeDetails) => {
    if (!onChange) return;

    const input = details.checked;
    const target = {
      checked: input,
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
      checked={isChecked}
      disabled={isDisabled}
      onChange={handleChange}
    />
  );
};
