import React, { FC } from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { expect } from '@storybook/jest';

import Link, { LinkProps } from '../index';

const renderWrapper = ({ children, ...props }: LinkProps) =>
  render(<Link {...props}>{children}</Link>);

const MockIcon: FC<{ testId: string }> = ({ testId }) => (
  <svg data-testid={testId} />
);

describe('<Link>', () => {
  beforeEach(cleanup);

  it('should render link', () => {
    renderWrapper({ children: 'Link' });

    const link = screen.getByText('Link');
    expect(link).toBeInTheDocument();
  });

  it('should render link with left icon', async () => {
    renderWrapper({
      children: 'Link',
      leftIcon: <MockIcon testId="left-icon" />,
    });
    const icon = screen.getByTestId('left-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render link with right icon', async () => {
    renderWrapper({
      children: 'Link',
      rightIcon: <MockIcon testId="right-icon" />,
    });
    const icon = screen.getByTestId('right-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render link with left & right icons', async () => {
    renderWrapper({
      children: 'Link',
      leftIcon: <MockIcon testId="left-icon" />,
      rightIcon: <MockIcon testId="right-icon" />,
    });
    const leftIcon = screen.getByTestId('left-icon');
    const rightIcon = screen.getByTestId('right-icon');
    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
  });
});
