import React, { FC, PropsWithChildren } from 'react';

import {
  TabList as TabListComponents,
  TabListProps as TabListPropsComponents,
} from 'src/components/tab/TabList';

type TabListProps = TabListPropsComponents & {
  borderBottom?: TabListPropsComponents['borderBottom'];
  px?: TabListPropsComponents['paddingX'];
};
export const TabList: FC<PropsWithChildren<TabListProps>> = ({
  borderBottom,
  children,
  ...rest
}) => {
  return (
    <TabListComponents borderBottom={borderBottom} {...rest}>
      {children}
    </TabListComponents>
  );
};
