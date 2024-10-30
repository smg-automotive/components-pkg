import React, { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import Switch, { SwitchProps } from '../switchComponent';
import { CloseIcon } from '../icons';
import Button, { ButtonProps } from '../button';

export type DevOverlayVariables = Record<string, string | number>[];

export type DevOverlayProps = Omit<ButtonProps, 'onClick' | 'children'> &
  Omit<SwitchProps, 'onChange' | 'label' | 'id'> & {
    hideDevOverlay: Exclude<ButtonProps['onClick'], undefined>;
    toggleTheme: Exclude<SwitchProps['onChange'], undefined>;
    toggleTranslation: Exclude<SwitchProps['onChange'], undefined>;
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
      maxWidth="min(94%, 320px)"
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
        <TableContainer>
          <Table variant="unstyled" size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {variables.map(({ name, value }) => {
                return (
                  <Tr key={name} wordBreak="break-all">
                    <Td>{name}</Td>
                    <Td>{value}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
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
      />
      <Heading as="h4" textStyle="heading4">
        Switch Translation
      </Heading>
      <Switch
        id="translation-toggle"
        onChange={toggleTranslation}
        isChecked={displayTranslationKeys}
        label={displayTranslationKeys ? <span>🔑</span> : <span>🌐</span>}
      />
    </Box>
  );
};
export default DevOverlay;
