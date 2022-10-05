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

export type DevOverlayVariables = Record<string, string | number>[];

export type DevOverlayProps = Omit<ButtonProps, 'onClick'> &
  Omit<SwitchProps, 'onChange'> & {
    hideDevOverlay: Exclude<ButtonProps['onClick'], undefined>;
    toggleTheme: Exclude<SwitchProps['onChange'], undefined>;
    variables: DevOverlayVariables;
  };

const DevOverlay: FC<DevOverlayProps> = ({
  variables,
  hideDevOverlay,
  toggleTheme,
}) => {
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
        <Button onClick={hideDevOverlay}>
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
        <Switch onChange={toggleTheme} />
        &nbsp;
        <span>🏍️</span>
      </div>
    </Box>
  );
};
export default DevOverlay;
