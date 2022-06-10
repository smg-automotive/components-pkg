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

import { convertRemToPx } from '../../utilities';

const SpacingShowCase: FC = () => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr border="1px" borderColor="gray.300">
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Pixels</Th>
            <Th>Example</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.space).map(([name, space]) => {
          return (
            <Tr key={name} border="1px" borderColor="gray.300">
              <Td>{name}</Td>
              <Td>{space as string}</Td>
              <Td>{convertRemToPx(space as string)}</Td>
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

  return <Tr border="1px" borderColor="gray.100"></Tr>;
};
export default SpacingShowCase;
