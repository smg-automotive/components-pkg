import React, { FC } from 'react';
import { Box, Flex, Heading, Spacer, Table } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import { Switch, SwitchProps } from '../switch';
import { CloseIcon } from '../icons';
import { Button, ButtonSharedProps } from '../button';

export type DevOverlayVariables = { name: string; value: string }[];

export type DevOverlayProps = {
  hideDevOverlay: Exclude<ButtonSharedProps['onClick'], undefined>;
  toggleTheme: Exclude<SwitchProps['onCheckedChange'], undefined>;
  toggleTranslation: Exclude<SwitchProps['onCheckedChange'], undefined>;
  variables: DevOverlayVariables;
  activeTheme: Brand;
  displayTranslationKeys: boolean;
};

const DevOverlay: FC<DevOverlayProps> = ({
  variables,
  hideDevOverlay,
  toggleTheme,
  toggleTranslation,
  activeTheme,
  displayTranslationKeys = false,
}) => {
  const isThemeSwitcherChecked = Brand.AutoScout24 !== activeTheme;

  return (
    <Box
      position="absolute"
      right="md"
      bottom="md"
      borderRadius="sm"
      padding="md"
      backgroundColor="gray.200"
      display="inline-block"
      boxShadow="md"
      as="aside"
      css={{ maxWidth: 'min(94%, 320px)' }}
    >
      <Flex>
        <Heading as="h3" textStyle="heading3">
          Dev Overlay&nbsp;
        </Heading>
        <Spacer />
        <Button onClick={hideDevOverlay} data-testid="close-dev-overlay">
          <CloseIcon />
        </Button>
      </Flex>
      <Heading as="h4" textStyle="heading4">
        Variables
      </Heading>
      {!variables || variables.length === 0 ? null : (
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.ColumnHeader padding="0">Name</Table.ColumnHeader>
              <Table.ColumnHeader>Value</Table.ColumnHeader>
            </Table.Row>
          </Table.Body>
          <Table.Body>
            {variables.map(({ name, value }) => {
              return (
                <Table.Row key={name} wordBreak="break-all">
                  <Table.Cell padding="0">{name}</Table.Cell>
                  <Table.Cell>{value}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      )}
      <br />
      <Heading as="h4" textStyle="heading4">
        Switch Theme
      </Heading>
      <Switch
        id="theme-toggle"
        onCheckedChange={toggleTheme}
        checked={isThemeSwitcherChecked}
        label={isThemeSwitcherChecked ? <span>🏍️</span> : <span>🚗</span>}
        disabled={false}
      />
      <Heading as="h4" textStyle="heading4">
        Switch Translation
      </Heading>
      <Switch
        id="translation-toggle"
        onCheckedChange={toggleTranslation}
        checked={displayTranslationKeys}
        label={displayTranslationKeys ? <span>🔑</span> : <span>🌐</span>}
        disabled={false}
      />
    </Box>
  );
};
export default DevOverlay;
