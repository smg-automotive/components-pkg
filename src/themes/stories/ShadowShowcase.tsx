import React, { FC } from 'react';
import { Box, Table, useChakraContext } from '@chakra-ui/react';

const ShadowShowcase: FC = () => {
  const context = useChakraContext();
  const shadows = context._config.theme?.tokens?.shadows || {};

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
          {Object.entries(shadows).map(([name, shadow]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>
                  <Box
                    key={name}
                    m="md"
                    w="lg"
                    h="lg"
                    shadow={shadow.value.toString()}
                    border="1px"
                    borderColor="gray.300"
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

export default ShadowShowcase;
