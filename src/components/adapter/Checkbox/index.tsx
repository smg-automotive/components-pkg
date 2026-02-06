import React, { FC } from 'react';

import {
  CheckboxProps,
  Checkbox as ComponentsCheckbox,
} from 'src/components/checkbox';

type Props = Omit<CheckboxProps, 'checked' | 'disabled'> & {
  isChecked?: boolean;
  isDisabled?: boolean;
};

export const Checkbox: FC<Props> = (props) => {
  const { isChecked, isDisabled, ...rest } = props;
  return (
    <ComponentsCheckbox {...rest} checked={isChecked} disabled={isDisabled} />
  );
};
