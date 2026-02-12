import React, { ChangeEvent } from 'react';

import {
  Switch as ComponentsSwitch,
  SwitchCheckedChangeDetails,
  SwitchProps,
} from 'src/components/switch';

type Props = Omit<SwitchProps, 'disabled' | 'checked' | 'onCheckedChange'> & {
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Switch: React.FC<Props> = (props) => {
  const { isChecked, isDisabled, onChange, ...rest } = props;

  const handleOnChange = (details: SwitchCheckedChangeDetails) => {
    if (!onChange) return;

    const input = details.checked;
    const target = {
      checked: input,
    } as HTMLInputElement;

    const syntheticEvent = {
      target,
      currentTarget: target,
    } as ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };

  return (
    <ComponentsSwitch
      {...rest}
      {...(isChecked ? { checked: isChecked } : {})}
      {...(isDisabled ? { disabled: isDisabled } : {})}
      {...(onChange ? { onCheckedChange: handleOnChange } : {})}
    />
  );
};
