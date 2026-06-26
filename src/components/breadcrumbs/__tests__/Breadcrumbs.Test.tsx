import React from 'react';

import { render, screen } from '@/jest-utils';

import { BreadcrumbLink } from '../Link';
import { BreadcrumbsItem } from '../Item';
import { Breadcrumbs } from '..';

type NextLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  prefetch?: boolean;
  replace?: boolean;
};

const NextLink = ({ children, prefetch, replace, ...props }: NextLinkProps) => {
  return (
    <a
      data-next-link="true"
      data-prefetch={String(prefetch)}
      data-replace={String(replace)}
      {...props}
    >
      {children}
    </a>
  );
};

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

  it('properly renders breadcrumbs with a NextLink compatible component', () => {
    render(
      <Breadcrumbs data-testid="breadcrumbs-container">
        <BreadcrumbsItem>
          <BreadcrumbLink as={NextLink} href="/cars" prefetch={false} replace>
            Cars
          </BreadcrumbLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbLink>Details</BreadcrumbLink>
        </BreadcrumbsItem>
      </Breadcrumbs>,
    );

    const link = screen.getByRole('link', { name: 'Cars' });
    expect(link).toHaveAttribute('href', '/cars');
    expect(link).toHaveAttribute('data-next-link', 'true');
    expect(link).toHaveAttribute('data-prefetch', 'false');
    expect(link).toHaveAttribute('data-replace', 'true');
  });
});
