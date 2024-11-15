import React, { FC } from 'react';
import { Code, Table, useChakraContext } from '@chakra-ui/react';

const TypographyShowcase: FC = () => {
  const context = useChakraContext();
  const textStyles = context._config.theme?.textStyles || {};

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
          {Object.entries(textStyles).map(([name, typography]) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell whiteSpace="pre">
                  <Code>{JSON.stringify(typography.value, null, 2)}</Code>
                </Table.Cell>
                <Table.Cell textStyle={name}>
                  The quick brown fox jumps over the lazy dog and runs away.
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default TypographyShowcase;
