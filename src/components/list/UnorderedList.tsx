import React, { FC, PropsWithChildren } from 'react';

import { ListProps } from './props';

import List from '.';

export const styleTypes = ['disc', 'circle', 'square', 'initial'] as const;
type StyleType = (typeof styleTypes)[number];

const UnorderedList: FC<
  PropsWithChildren<ListProps & { styleType?: StyleType }>
> = ({ children, styleType = 'initial', ...props }) => {
  return (
    // default implementation in chakra forces 1em margin-start
    // https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/layout/src/list.tsx#L107
    <List as="ul" styleType={styleType} {...props}>
      {children}
    </List>
  );
};

export default UnorderedList;
