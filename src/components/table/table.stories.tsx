import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Table } from './index';

const meta: Meta<typeof Table.Root> = {
  title: 'Components/Data Display/Table',
  component: Table.Root,
  render: (args) => (
    <Table.ScrollArea>
      <Table.Root {...args}>
        <Table.Caption>Imperial to metric conversion factors</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>To convert</Table.ColumnHeader>
            <Table.ColumnHeader>into</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">multiply by</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>inches</Table.Cell>
            <Table.Cell>millimeters (mm)</Table.Cell>
            <Table.Cell textAlign="end">25.4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>feet</Table.Cell>
            <Table.Cell>centimeters (cm)</Table.Cell>
            <Table.Cell textAlign="end">30.48</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>yards</Table.Cell>
            <Table.Cell>meters (m)</Table.Cell>
            <Table.Cell textAlign="end">0.91444</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.ColumnHeader>To convert</Table.ColumnHeader>
            <Table.ColumnHeader>into</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">multiply by</Table.ColumnHeader>
          </Table.Row>
        </Table.Footer>
      </Table.Root>
    </Table.ScrollArea>
  ),

  args: {
    variant: 'line' as const,
    interactive: false,
    striped: false,
    showColumnBorder: false,
    size: 'md',
    colorPalette: 'gray',
  },

  argTypes: {
    ...getRecipeControls('table'),
  },
};
export default meta;

export const Overview: StoryObj<typeof Table.Root> = {};
