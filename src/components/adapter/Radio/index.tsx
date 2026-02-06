import React, { FC } from 'react';

import { Radio as ComponentsRadio, RadioProps } from 'src/components/radio';

type Props = RadioProps & {
  isChecked?: boolean;
};

export const Radio: FC<Props> = (props) => {
  const { isChecked, ...rest } = props;
  return (
    <ComponentsRadio
      {...rest}
      {...(isChecked ? { checked: isChecked } : {})}
      checked={isChecked}
    />
  );
};
