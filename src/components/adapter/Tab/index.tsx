import React, { FC, PropsWithChildren } from 'react';

import { Tab as TabComponents, TabProps } from 'src/components/tab/Tab';

type Props = TabProps & {
  isDisabled?: boolean;
  marginX?: TabProps['marginX'];
};

export const Tab: FC<PropsWithChildren<Props>> = (props) => {
  const { isDisabled, ...rest } = props;

  return (
    <TabComponents
      {...rest}
      {...(isDisabled ? { disabled: isDisabled } : {})}
    />
  );
};
