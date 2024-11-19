import React, { FC } from 'react';
import {
  Table as ChakraTable,
  TableCellProps as ChakraTableCellProps,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps,
} from '@chakra-ui/react';
export type {
  TableBodyProps,
  TableCaptionProps,
  TableColumnGroupProps,
  TableColumnProps,
  TableFooterProps,
  TableHeaderProps,
  TableRootProps,
  TableRowProps,
  TableScrollAreaProps,
} from '@chakra-ui/react';

const {
  Body,
  Caption,
  Column,
  ColumnGroup,
  Footer,
  Header,
  Root,
  Row,
  ScrollArea,
} = ChakraTable;

Body.displayName = 'Table.Body';
Caption.displayName = 'Table.Caption';
Column.displayName = 'Table.Column';
ColumnGroup.displayName = 'Table.ColumnGroup';
Footer.displayName = 'Table.Footer';
Header.displayName = 'Table.Header';
Root.displayName = 'Table.Root';
Row.displayName = 'Table.Row';
ScrollArea.displayName = 'Table.ScrollArea';

export type TableCellProps = ChakraTableCellProps & { isNumeric?: boolean };
const Cell: FC<TableCellProps> = ({ isNumeric, children, ...props }) => (
  <ChakraTable.Cell
    {...props}
    {...{ ...(isNumeric ? { 'data-is-numeric': true } : {}) }}
  >
    {children}
  </ChakraTable.Cell>
);
Cell.displayName = 'Table.Cell';

export type TableColumnHeaderProps = ChakraTableColumnHeaderProps & {
  isNumeric?: boolean;
};
const ColumnHeader: FC<TableCellProps> = ({
  isNumeric,
  children,
  ...props
}) => (
  <ChakraTable.ColumnHeader
    {...props}
    {...{ ...(isNumeric ? { 'data-is-numeric': true } : {}) }}
  >
    {children}
  </ChakraTable.ColumnHeader>
);
ColumnHeader.displayName = 'Table.ColumnHeader';

export const Table = {
  Body,
  Caption,
  Cell,
  Column,
  ColumnGroup,
  ColumnHeader,
  Footer,
  Header,
  Root,
  Row,
  ScrollArea,
};
