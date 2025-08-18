import React, { ReactNode } from 'react';

import { render, screen } from 'jest-utils';

import Link, { LinkProps } from '../index';

const renderWrapper = ({ children, ...props }: LinkProps) =>
  render(<Link {...props}>{children}</Link>);

const MockIcon = () => <svg data-testid="test-icon" />;

const MockRouterLink = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <div data-testid="router-link" {...props}>
      {children}
    </div>
  );
};

describe('<Link>', () => {
  it('should render link', () => {
    render(<Link>Link</Link>);

    const link = screen.getByText('Link');
    expect(link).toBeInTheDocument();
  });

  it('should render link with left icon', () => {
    renderWrapper({
      children: 'Link',
      leftIcon: <MockIcon />,
    });
    const icon = screen.getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render link with right icon', () => {
    renderWrapper({
      children: 'Link',
      rightIcon: <MockIcon />,
    });
    const icon = screen.getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render link with left & right icons', () => {
    renderWrapper({
      children: 'Link',
      leftIcon: <MockIcon />,
      rightIcon: <MockIcon />,
    });
    const icons = screen.getAllByTestId('test-icon');
    expect(icons.length).toBe(2);
  });

  it('should render href when prop was passed', () => {
    renderWrapper({
      children: 'Link',
      href: 'https://google.com',
      isExternal: true,
    });

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href');
    expect(link).toHaveAttribute('target');
    expect(link.getAttribute('target')).toBe('_blank');
  });

  it('should be wrapped by router link component', () => {
    renderWrapper({
      as: MockRouterLink,
      children: 'Link',
      to: '/home',
    });

    const routerLink = screen.getByTestId('router-link');
    expect(routerLink).toBeInTheDocument();
  });
});
