import React, { FC } from 'react';
import { Table, useChakraContext } from '@chakra-ui/react';

const ContainerShowCase: FC = () => {
  const context = useChakraContext();
  const containerSizes = context._config.theme?.tokens?.sizes?.container || {};

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
          {Object.entries(containerSizes).map(([name, size]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{size.value}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
export default ContainerShowCase;
