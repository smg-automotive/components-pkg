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
      variant?: 'icon-outside' | 'icon-inside';
    } & ListRootProps
  >
> = ({ children, variant, ...rest }) => {
  return (
    <ListRoot as="ul" variant={variant} listStyleType="initial" {...rest}>
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
