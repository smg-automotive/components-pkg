import React, { FC } from 'react';
import { Table, useChakraContext } from '@chakra-ui/react';

import { convertRemEmToPx } from 'src/utilities/convertRemEmToPx';

const BreakpointShowCase: FC = () => {
  const context = useChakraContext();
  const breakpoints = context._config.theme?.breakpoints || {};

  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Value</Table.ColumnHeader>
            <Table.ColumnHeader>Pixels</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(breakpoints).map(([name, breakpoint]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{breakpoint}</Table.Cell>
                <Table.Cell>{convertRemEmToPx(breakpoint)}px</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
export default BreakpointShowCase;
