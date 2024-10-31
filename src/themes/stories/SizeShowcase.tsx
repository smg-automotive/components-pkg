import React, { FC } from 'react';
import { Table, useChakraContext } from '@chakra-ui/react';

import { convertRemEmToPx } from 'src';

const SizingShowCase: FC = () => {
  const context = useChakraContext();
  const sizes = context._config.theme?.tokens?.sizes || {};

  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Caption>
          The pixel column is ONLY a reference to the values in figma. The pixel
          values are NOT computed.
        </Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Value</Table.ColumnHeader>
            <Table.ColumnHeader>Pixels</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(sizes).map(([name, size]) => {
            if (name === 'container') return null;
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{size.value.toString()}</Table.Cell>
                <Table.Cell>
                  {convertRemEmToPx(size.value.toString())}px
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
export default SizingShowCase;
