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

const ZIndicesShowcase: FC = () => {
  const theme = useTheme();
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.zIndices).map(([name, value]) => {
          return (
            <Tr key={name}>
              <Td>{name}</Td>
              <Td>{value as string}</Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
};
export default ZIndicesShowcase;
