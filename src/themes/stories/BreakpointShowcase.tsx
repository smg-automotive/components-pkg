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

import { convertRemEmToPx } from '../../';

const BreakpointShowCase: FC = () => {
  const theme = useTheme();
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr border="1px" borderColor="gray.300">
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Pixels</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.breakpoints).map(([name, breakpoint]) => {
          return (
            <Tr key={name} border="1px" borderColor="gray.300">
              <Td>{name}</Td>
              <Td>{breakpoint as string}</Td>
              <Td>{`${convertRemEmToPx(breakpoint as string)}px`}</Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
};
export default BreakpointShowCase;
