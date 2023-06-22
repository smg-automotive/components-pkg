import React, { FC } from 'react';
import {
  Box,
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  useTheme,
} from '@chakra-ui/react';

import { convertRemEmToPx } from 'src/utilities/convertRemEmToPx';

const SpacingShowCase: FC = () => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Pixels</Th>
            <Th>Example</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.space).map(([name, space]) => {
          return (
            <Tr key={name}>
              <Td>{name}</Td>
              <Td>{space as string}</Td>
              <Td>{`${convertRemEmToPx(space as string)}px`}</Td>
              <Td>
                <Box bg="gray.200" p={space as string}>
                  <Box bg="white" textAlign="center" width="auto">
                    {name}
                  </Box>
                </Box>
              </Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
};
export default SpacingShowCase;
