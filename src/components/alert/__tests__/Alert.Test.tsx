import React from 'react';

import { render, screen } from '@testing-library/react';

import Alert from '../index';

const MockIcon = () => <svg data-testid="test-icon" />;

const renderWrapper = ({
  title = 'Your browser is outdated!',
  description = 'Your Chakra experience may be degraded.',
  icon = <MockIcon />,
  link = {
    url: 'http://link.com',
    text: 'Link',
    isExternal: true,
  },
} = {}) =>
  render(
    <Alert title={title} description={description} icon={icon} link={link} />
  );

describe('<Alert>', () => {
  it('renders Alert with title', () => {
    const title = 'I am here my friend!';
    renderWrapper({ title });

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders Alert with description', () => {
    const description = 'Hey I am here my friend!';
    renderWrapper({ description });

    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders Alert with link', () => {
    const url = 'https://www.autoscout24.ch/de';
    const text = 'I am your link';
    const isExternal = true;
    renderWrapper({ link: { url, text, isExternal } });

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
