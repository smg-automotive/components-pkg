import React, { FC } from 'react';

import { Box, Table, useChakraContext } from '@chakra-ui/react';

const OpacityShowcase: FC = () => {
  const context = useChakraContext();
  const opacities = context._config.theme?.tokens?.opacity || {};

  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Demo</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(opacities).map(([name, opacity]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>
                  <Box
                    bg="gray.900"
                    h="lg"
                    w="lg"
                    borderRadius="max"
                    opacity={opacity.value.toString()}
                  ></Box>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default OpacityShowcase;
