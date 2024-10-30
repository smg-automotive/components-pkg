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

import { convertRemEmToPx } from 'src/';

const SizingShowCase: FC = () => {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table>
        <TableCaption>
          The pixel column is ONLY a reference to the values in figma. The pixel
          values are NOT computed.
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Pixels</Th>
          </Tr>
        </Thead>
        {Object.entries(theme.sizes).map(([name, size]) => {
          if (name === 'container') return null;
          return (
            <Tr key={name}>
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
