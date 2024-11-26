import { Table as ChakraTable } from '@chakra-ui/react';
export type {
  TableBodyProps,
  TableCaptionProps,
  TableColumnGroupProps,
  TableColumnProps,
  TableCellProps,
  TableColumnHeaderProps,
  TableFooterProps,
  TableHeaderProps,
  TableRootProps,
  TableRowProps,
  TableScrollAreaProps,
} from '@chakra-ui/react';

const {
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
Cell.displayName = 'Table.Cell';
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
