import React, { FC } from 'react';
import { Box, Table, useChakraContext } from '@chakra-ui/react';

const BorderShowCase: FC = () => {
  const context = useChakraContext();
  const borders = context._config.theme?.tokens?.borders || {};

  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Value</Table.ColumnHeader>
            <Table.ColumnHeader>Demo</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(borders).map(([name, border]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{border.value.toString()}</Table.Cell>
                <Table.Cell>
                  <Box
                    borderBottom={context.token(`borders.${name}`)}
                    w="3xl"
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
export default BorderShowCase;
