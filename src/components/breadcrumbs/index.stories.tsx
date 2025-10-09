import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbSeparator } from './Separator';
import { BreadcrumbLink } from './Link';
import { BreadcrumbItem } from './Item';

import { BreadcrumbsComponent } from './index';

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
      <BreadcrumbSeparator key="sep1" />,
      <BreadcrumbItem key="golf">
        <BreadcrumbLink href="#golf">Golf</BreadcrumbLink>
      </BreadcrumbItem>,
      <BreadcrumbSeparator key="sep2" />,
      <BreadcrumbItem key="model">
        <BreadcrumbLink>2.0 TSI GTI DSG Performance</BreadcrumbLink>
      </BreadcrumbItem>,
    ],
  },
};
