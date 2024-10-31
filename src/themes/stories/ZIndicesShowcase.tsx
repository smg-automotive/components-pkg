import React, { FC } from 'react';
import { Table, useChakraContext } from '@chakra-ui/react';

const ZIndicesShowcase: FC = () => {
  const context = useChakraContext();
  const zIndices = context._config.theme?.tokens?.zIndex || {};

  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Value</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(zIndices).map(([name, zIndex]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{zIndex.value.toString()}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
export default ZIndicesShowcase;
