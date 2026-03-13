import React, { FC, PropsWithChildren } from 'react';

import {
  Table as ComponentsTable,
  TableCellProps,
  TableColumnHeaderProps,
} from 'src/components/table';

const Table = ComponentsTable.Root;
const Thead = ComponentsTable.Header;
const Tbody = ComponentsTable.Body;
const Tr = ComponentsTable.Row;
const Tfoot = ComponentsTable.Footer;

type ThProps = TableColumnHeaderProps & {
  isNumeric?: boolean;
};

const Th: FC<PropsWithChildren<ThProps>> = (props) => {
  const { isNumeric, ...rest } = props;
  return (
    <ComponentsTable.ColumnHeader
      {...rest}
      {...(isNumeric ? { textAlign: 'end' } : {})}
    />
  );
};

type TdProps = TableCellProps & {
  isNumeric?: boolean;
};

const Td: FC<PropsWithChildren<TdProps>> = (props) => {
  const { isNumeric, ...rest } = props;
  return (
    <ComponentsTable.Cell
      {...rest}
      {...(isNumeric ? { textAlign: 'end' } : {})}
    />
  );
};

export { Table, Tbody, Thead, Th, Td, Tr, Tfoot };
