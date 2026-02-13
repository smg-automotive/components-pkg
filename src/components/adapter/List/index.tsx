import React, { FC, PropsWithChildren } from 'react';

import {
  List as ListComponents,
  ListRoot,
  ListRootProps,
} from 'src/components/list';

const ListItem = ListComponents.Item;

type ListProps = ListRootProps & {
  size?: ListRootProps['size'];
  spacing?: ListRootProps['gap'];
};

const List: FC<PropsWithChildren<ListProps>> = ({ children, ...rest }) => {
  const { spacing, ...restWithoutSpacing } = rest;
  return (
    <ListComponents.Root
      {...restWithoutSpacing}
      as="ul"
      {...(spacing ? { gap: spacing } : {})}
    >
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
