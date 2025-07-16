import React, { FC } from 'react';
import { Box, Flex, Heading, Spacer, Table } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import Switch, { SwitchComponentProps } from '../switchComponent';
// import { CloseIcon } from '../icons';
// import Button, { ButtonProps } from '../button';

export type DevOverlayVariables = Record<string, string | number>[];

export type DevOverlayProps =
  // Omit<ButtonProps, 'onClick' | 'children'> {
  // hideDevOverlay: Exclude<ButtonProps['onClick'], undefined>;
  {
    toggleTheme: Exclude<SwitchComponentProps['onChange'], undefined>;
    toggleTranslation: Exclude<SwitchComponentProps['onChange'], undefined>;
    variables: DevOverlayVariables;
    activeTheme: Brand;
    displayTranslationKeys: boolean;
  };

const DevOverlay: FC<DevOverlayProps> = ({
  variables,
  // hideDevOverlay,
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
        {/*<Button onClick={hideDevOverlay} data-testid="close-dev-overlay">
          <CloseIcon />
        </Button>*/}
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
        onChange={toggleTheme}
        isChecked={isThemeSwitcherChecked}
        label={isThemeSwitcherChecked ? <span>🏍️</span> : <span>🚗</span>}
        isDisabled={false}
      />
      <Heading as="h4" textStyle="heading4">
        Switch Translation
      </Heading>
      <Switch
        id="translation-toggle"
        onChange={toggleTranslation}
        isChecked={displayTranslationKeys}
        label={displayTranslationKeys ? <span>🔑</span> : <span>🌐</span>}
        isDisabled={false}
      />
    </Box>
  );
};
export default DevOverlay;
