import React, { FC } from 'react';

import { Radio as ComponentsRadio, RadioProps } from 'src/components/radio';

type Props = Omit<RadioProps, 'disabled'> & {
  isChecked?: boolean;
  isDisabled?: boolean;
};

export const Radio: FC<Props> = (props) => {
  const { isChecked, isDisabled, ...rest } = props;
  return (
    <ComponentsRadio
      {...rest}
      {...(isChecked ? { checked: isChecked } : {})}
      {...(isDisabled ? { disabled: isDisabled } : {})}
      checked={isChecked}
    />
  );
};
