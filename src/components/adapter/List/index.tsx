import React, { FC, PropsWithChildren } from 'react';

import {
  List as ListComponents,
  ListRoot,
  ListRootProps,
} from 'src/components/list';

const ListItem = ListComponents.Item;

const List: FC<PropsWithChildren<ListRootProps>> = ({ children, ...rest }) => {
  return (
    <ListComponents.Root {...rest} as="ul">
      {children}
    </ListComponents.Root>
  );
};

const UnorderedList: FC<
  PropsWithChildren<
    {
      variant?: 'icon-outside' | 'initial';
    } & ListRootProps
  >
> = ({ children, variant, ...rest }) => {
  const listStylePos = variant === 'icon-outside' ? 'outside' : 'inside';

  return (
    <ListRoot
      {...rest}
      as="ul"
      listStyleType="initial"
      {...(variant ? { listStylePosition: listStylePos } : {})}
    >
      {children}
    </ListRoot>
  );
};

const OrderedList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ListRoot as="ol" listStyleType="decimal">
      {children}
    </ListRoot>
  );
};

export { OrderedList, UnorderedList, List, ListItem };
