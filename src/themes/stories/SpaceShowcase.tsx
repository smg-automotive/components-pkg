import React, { FC } from 'react';
import { Box, Table, useChakraContext } from '@chakra-ui/react';

import { convertRemEmToPx } from 'src/utilities/convertRemEmToPx';

const SpacingShowCase: FC = () => {
  const context = useChakraContext();
  const spaces = context._config.theme?.tokens?.spacing || {};

  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Value</Table.ColumnHeader>
            <Table.ColumnHeader>Pixels</Table.ColumnHeader>
            <Table.ColumnHeader>Example</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(spaces).map(([name, space]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{space.value.toString()}</Table.Cell>
                <Table.Cell>
                  {convertRemEmToPx(space.value.toString())}px
                </Table.Cell>
                <Table.Cell>
                  <Box bg="gray.200" p={space.value.toString()}>
                    <Box bg="white" textAlign="center" width="auto">
                      {name}
                    </Box>
                  </Box>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
export default SpacingShowCase;
