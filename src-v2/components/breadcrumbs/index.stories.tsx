import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import BreadcrumbLink from './Link';
import BreadcrumbItem from './Item';

import BreadcrumbsComponent from './index';

const meta: Meta<typeof BreadcrumbsComponent> = {
  title: 'Patterns/Navigation/Breadcrumbs',
  component: BreadcrumbsComponent,
};
export default meta;

export const Breadcrumbs: StoryObj<typeof BreadcrumbsComponent> = {
  args: {
    children: [
      <BreadcrumbItem key="vw">
        <BreadcrumbLink href="#vw">VW</BreadcrumbLink>
      </BreadcrumbItem>,
      <BreadcrumbItem key="golf">
        <BreadcrumbLink href="#golf">Golf</BreadcrumbLink>
      </BreadcrumbItem>,
      <BreadcrumbItem key="model">
        <BreadcrumbLink>2.0 TSI GTI DSG Performance</BreadcrumbLink>
      </BreadcrumbItem>,
    ],
  },
};
