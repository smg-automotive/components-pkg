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

import { convertRemEmToPx } from 'src/';

const BreakpointShowCase: FC = () => {
  const theme = useTheme();
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Pixels</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.breakpoints).map(([name, breakpoint]) => {
          return (
            <Tr key={name}>
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
