import React, { FC } from 'react';

import { NavigationLinkNode } from '../config/drawerNodeItems';
import { CollapsibleSection, NonCollapsibleSection } from './DrawerSections';

export const DrawerMenu: FC<{ node: NavigationLinkNode }> = ({ node }) => {
  if (!node.translationKey) {
    return <NonCollapsibleSection node={node} />;
  }

  return <CollapsibleSection node={node} />;
};
