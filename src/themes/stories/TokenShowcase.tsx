import React from 'react';
import {
  SystemConfig,
  Table,
  Tokens,
  useChakraContext,
} from '@chakra-ui/react';

type TokenGroupName = keyof NonNullable<
  NonNullable<SystemConfig['theme']>['tokens']
>;

type TokenShowcaseProps<Token extends keyof Tokens> = {
  tokenPath: string;
  renderValue?: boolean;
  renderDemo?: (tokenName: Tokens[Token]) => React.ReactNode;
  renderConversion?: {
    conversionFunction: (value: string) => string;
    unitLabel: string;
    caption?: string;
  };
};

const TokenShowcase = <Token extends keyof Tokens>({
  tokenPath,
  renderValue = true,
  renderConversion,
  renderDemo,
}: TokenShowcaseProps<Token>) => {
  const context = useChakraContext();
  const [tokenGroup, ...path] = tokenPath.split('.') as [
    TokenGroupName,
    ...string[],
  ];
  const allTokens = context._config.theme?.tokens?.[tokenGroup];
  const tokens = Object.keys(
    path.reduce((acc: typeof allTokens, key: string) => {
      if (acc && key in acc && !('value' in acc[key])) {
        return acc[key];
      }
      return undefined;
    }, allTokens) || {},
  );
  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            {renderValue ? (
              <Table.ColumnHeader>Value</Table.ColumnHeader>
            ) : null}
            {renderConversion ? (
              <Table.ColumnHeader>
                {renderConversion.unitLabel}
              </Table.ColumnHeader>
            ) : null}
            {renderDemo ? <Table.ColumnHeader>Demo</Table.ColumnHeader> : null}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tokens.map((name) => {
            const tokenValue = context.token(`${tokenPath}.${name}`);
            if (tokenValue === undefined) return null;

            return (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                {renderValue ? <Table.Cell>{tokenValue}</Table.Cell> : null}
                {renderConversion ? (
                  <Table.Cell>
                    {renderConversion.conversionFunction(tokenValue)}
                  </Table.Cell>
                ) : null}
                {renderDemo ? (
                  <Table.Cell>{renderDemo(name as Tokens[Token])}</Table.Cell>
                ) : null}
              </Table.Row>
            );
          })}
        </Table.Body>
        {renderConversion?.caption ? (
          <Table.Caption>{renderConversion.caption}</Table.Caption>
        ) : null}
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default TokenShowcase;
