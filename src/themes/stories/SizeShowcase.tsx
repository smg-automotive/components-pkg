import React, { FC } from 'react';
import {
  Table,
  TableCaption,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  useTheme,
} from '@chakra-ui/react';

import { convertRemEmToPx } from '../../';

const SizingShowCase: FC = () => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          The pixel column is ONLY a reference to the values in figma. The pixel
          values are NOT computed.
        </TableCaption>
        <Thead>
          <Tr border="1px" borderColor="gray.300">
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Pixels</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.sizes).map(([name, size]) => {
          if (name === 'container') return null;
          return (
            <Tr key={name} border="1px" borderColor="gray.300">
              <Td>{name}</Td>
              <Td>{`${size}`}</Td>
              <Td>{`${convertRemEmToPx(size as string)}px`}</Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
};
export default SizingShowCase;
