import React from 'react';

import { render, screen } from 'jest-utils';

import { BreadcrumbLink } from '../Link';
import { BreadcrumbsItem } from '../Item';
import { Breadcrumbs } from '..';

const renderWrapper = ({
  crumbs = [{ title: 'title', url: 'https://link.com' }],
}) =>
  render(
    <Breadcrumbs data-testid="breadcrumbs-container">
      {crumbs.map((crumb, i) => (
        <BreadcrumbsItem key={i}>
          <BreadcrumbLink href={crumb?.url}>{crumb.title}</BreadcrumbLink>
        </BreadcrumbsItem>
      ))}
    </Breadcrumbs>,
  );

describe('<Breadcrumbs>', () => {
  it('properly renders breadcrumbs without backButton', () => {
    const crumbs = [
      { title: 'VW', url: '#' },
      { title: 'Golf', url: '##' },
      { title: 'VW GOLF 2.0 TSI GTI DSG Performance', url: '' },
    ];
    renderWrapper({
      crumbs,
    });

    const links = screen.getAllByRole('link');
    links.forEach((link, i) => {
      expect(link).toHaveAttribute('href', crumbs[i].url);
    });
    const breadcrumbLastItem = screen.getByText(crumbs[2].title);
    expect(breadcrumbLastItem).not.toHaveAttribute('href');
  });
});
