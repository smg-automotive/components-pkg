import React, { FC } from 'react';
import {
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  useTheme,
} from '@chakra-ui/react';

const BorderShowCase: FC = () => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr border="1px" borderColor="gray.300">
            <Th>Name</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.borders).map(([name, border]) => {
          return (
            <Tr key={name} border="1px" borderColor="gray.300">
              <Td>{name}</Td>
              <Td>{border as string}</Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
};
export default BorderShowCase;
