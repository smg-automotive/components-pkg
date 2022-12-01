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

import Switch, { SwitchProps } from '../switchComponent';
import { CloseIcon } from '../icons';
import Button, { ButtonProps } from '../button';
import { Brand } from '../../types/brand';

export type DevOverlayVariables = Record<string, string | number>[];

export type DevOverlayProps = Omit<ButtonProps, 'onClick'> &
  Omit<SwitchProps, 'onChange'> & {
    hideDevOverlay: Exclude<ButtonProps['onClick'], undefined>;
    toggleTheme: Exclude<SwitchProps['onChange'], undefined>;
    variables: DevOverlayVariables;
    activeTheme: Brand;
  };

const DevOverlay: FC<DevOverlayProps> = ({
  variables,
  hideDevOverlay,
  toggleTheme,
  activeTheme,
}) => {
  const isThemeSwitcherChecked = Brand.as24 !== activeTheme;

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
          <Table variant="simple">
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
      <div>
        <span>🚗</span>
        &nbsp;
        <Switch onChange={toggleTheme} isChecked={isThemeSwitcherChecked} />
        &nbsp;
        <span>🏍️</span>
      </div>
    </Box>
  );
};
export default DevOverlay;
