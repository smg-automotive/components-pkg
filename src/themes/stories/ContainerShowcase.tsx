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

const ContainerShowCase: FC = () => {
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
        {Object.entries(theme.sizes.container).map(([name, value]) => {
          return (
            <Tr key={name} border="1px" borderColor="gray.300">
              <Td>{name}</Td>
              <Td>{value as string}</Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
};
export default ContainerShowCase;
