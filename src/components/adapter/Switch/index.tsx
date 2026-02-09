import React from 'react';

import { Switch as ComponentsSwitch, SwitchProps } from 'src/components/switch';

type Props = Omit<SwitchProps, 'disabled' | 'checked' | 'onCheckedChange'> & {
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
};

export const Switch: React.FC<Props> = (props) => {
  const { isChecked, isDisabled, onChange, ...rest } = props;
  return (
    <ComponentsSwitch
      {...rest}
      {...(isChecked ? { checked: isChecked } : {})}
      {...(isDisabled ? { disabled: isDisabled } : {})}
      {...(onChange ? { onCheckedChange: onChange } : {})}
    />
  );
};
