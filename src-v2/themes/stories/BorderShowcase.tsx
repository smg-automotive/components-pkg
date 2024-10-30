import React, { FC } from 'react';
import { useTheme } from '@chakra-ui/react';

import { Box, Table, TableContainer, Td, Th, Thead, Tr } from 'src/index';

const BorderShowCase: FC = () => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Demo</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.borders).map(([name, border]) => {
          return (
            <Tr key={name}>
              <Td>{name}</Td>
              <Td>{border as string}</Td>
              <Td>
                <Box borderBottom={border as string} w="100px" />
              </Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
};
export default BorderShowCase;
