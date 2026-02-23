import React from 'react';

import { Tabs as TabsComponents, TabsProps } from 'src/components/tab';

type Props = TabsProps & {
  onChange?: TabsProps['onValueChange'];
};

export const Tabs: React.FC<Props> = (props) => {
  const { onChange, ...rest } = props;

  return (
    <TabsComponents
      {...rest}
      {...(onChange ? { onValueChange: onChange } : {})}
    />
  );
};
