import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbLink } from './Link';
import { BreadcrumbsItem } from './Item';

import { Breadcrumbs as BreadcrumbsComponent } from './index';

const meta: Meta<typeof BreadcrumbsComponent> = {
  title: 'Patterns/Navigation/Breadcrumbs',
  component: BreadcrumbsComponent,
};
export default meta;

export const Breadcrumbs: StoryObj<typeof BreadcrumbsComponent> = {
  args: {
    children: [
      <BreadcrumbsItem key="vw">
        <BreadcrumbLink href="#vw">VW</BreadcrumbLink>
      </BreadcrumbsItem>,
      <BreadcrumbsItem key="golf">
        <BreadcrumbLink href="#golf">Golf</BreadcrumbLink>
      </BreadcrumbsItem>,
      <BreadcrumbsItem key="model">
        <BreadcrumbLink>2.0 TSI GTI DSG Performance</BreadcrumbLink>
      </BreadcrumbsItem>,
    ],
  },
};
