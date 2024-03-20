import React from 'react';

import { colors } from 'src/themes/autoscout24/colors';

import {
  TableCaption,
  Table as TableComponent,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from './index';

const Template = (args) => (
  <TableContainer>
    <TableComponent {...args}>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot>
    </TableComponent>
  </TableContainer>
);

export default {
  title: 'Components/Data Display/Table',

  args: {
    variant: 'simple',
    size: 'md',
  },

  argTypes: {
    variant: {
      options: ['simple', 'striped'],
      control: 'select',
    },

    size: {
      options: ['sm', 'md'],
      control: 'select',
    },

    colorScheme: {
      options: Object.keys(colors),
      control: 'select',
    },
  },
};

export const Table = {
  render: Template.bind({}),
  name: 'Table',
};
