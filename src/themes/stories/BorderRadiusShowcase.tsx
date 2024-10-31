import React, { FC } from 'react';
import { Box, Table, useChakraContext } from '@chakra-ui/react';

const BorderRadiusShowcase: FC = () => {
  const context = useChakraContext();
  const radii = context._config.theme?.tokens?.radii || {};

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
          {Object.entries(radii).map(([name, radius]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{radius.value.toString()}</Table.Cell>
                <Table.Cell>
                  <Box
                    backgroundColor="red.100"
                    width="3xl"
                    height="md"
                    borderRadius={context.token(`radii.${name}`)}
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

export default BorderRadiusShowcase;
