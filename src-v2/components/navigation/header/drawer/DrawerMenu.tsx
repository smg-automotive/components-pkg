import React, { FC } from 'react';

import { NavigationLinkNode } from '../config/DrawerNodeItems';
import { CollapsibleSection, NonCollapsibleSection } from './DrawerSections';

export const DrawerMenu: FC<{ node: NavigationLinkNode }> = ({ node }) => {
  if (!node.translationKey && !node.title) {
    return <NonCollapsibleSection node={node} />;
  }

  return <CollapsibleSection node={node} />;
};
