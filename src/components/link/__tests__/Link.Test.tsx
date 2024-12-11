import React from 'react';

import { render, screen } from '.jest/utils';

import { Link, LinkProps } from '../index';

const renderWrapper = ({ children, ...props }: LinkProps) =>
  render(<Link {...props}>{children}</Link>);

describe('<Link>', () => {
  it('should render link', () => {
    render(<Link>Link</Link>);

    const link = screen.getByText('Link');
    expect(link).toBeInTheDocument();
  });

  it('sets rel and target for external link', () => {
    renderWrapper({
      children: 'Link',
      href: 'https://google.com',
      isExternal: true,
    });

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href');
    expect(link).toHaveAttribute('target');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link).toHaveAttribute('rel');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
