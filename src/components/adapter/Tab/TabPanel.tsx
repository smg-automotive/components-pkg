import React, { PropsWithChildren } from 'react';

import {
  TabPanel as TabPanelComponents,
  TabPanelProps as TabPanelPropsComponents,
} from 'src/components/tab/TabPanel';

type Props = TabPanelPropsComponents & {
  value: TabPanelPropsComponents['value'];
};

export const TabPanel: React.FC<PropsWithChildren<Props>> = (props) => {
  return <TabPanelComponents {...props} />;
};
