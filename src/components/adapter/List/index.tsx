import React, { FC, PropsWithChildren } from 'react';

import { ListRoot } from 'src/components/list';

const UnorderedList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ListRoot as="ul" listStyleType="initial">
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

export { OrderedList, UnorderedList };
