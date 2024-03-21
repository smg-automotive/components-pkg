import React from 'react';

import BreadcrumbLink from './Link';
import BreadcrumbItem from './Item';

import BreadcrumbsComponent from './index';

const Template = (args: {
  crumbs: Array<{ title: string; href?: string }>;
}) => (
  <BreadcrumbsComponent>
    {args.crumbs.map((crumb, i) => (
      <BreadcrumbItem key={i}>
        <BreadcrumbLink href={crumb?.href}>{crumb.title}</BreadcrumbLink>
      </BreadcrumbItem>
    ))}
  </BreadcrumbsComponent>
);

export default {
  title: 'Patterns/Navigation/Breadcrumbs',
  component: BreadcrumbsComponent,
};

export const Breadcrumbs = {
  render: Template.bind({}),
  args: {
    crumbs: [
      {
        title: 'VW',
        href: '#',
      },
      {
        title: 'Golf',
        href: '##',
      },
      {
        title: 'VW GOLF 2.0 TSI GTI DSG Performance',
      },
    ],
  },
};
