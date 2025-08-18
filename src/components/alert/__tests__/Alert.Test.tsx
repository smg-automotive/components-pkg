import React from 'react';

import userEvent from '@testing-library/user-event';

import { act, render, screen } from 'jest-utils';

import Alert from '../index';

const MockIcon = () => <svg data-testid="test-icon" />;

const renderWrapper = ({
  title = 'Your browser is outdated!',
  description = 'Your Chakra experience may be degraded.',
  icon = <MockIcon />,
  link = {
    url: 'https://link.com',
    text: 'Link',
    isExternal: true,
  },
  dismissible = false,
  onDismiss = jest.fn(),
} = {}) =>
  render(
    <Alert
      title={title}
      description={description}
      icon={icon}
      link={link}
      {...(dismissible ? { dismissible, onDismiss } : {})}
    />,
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

  describe('dismissible', () => {
    it('can be dismissed', async () => {
      const user = userEvent.setup();
      const description = 'dismissible alert';
      renderWrapper({ dismissible: true, description });

      const dismissButton = screen.getByRole('button', { name: 'Close' });

      await act(() => user.click(dismissButton));

      expect(screen.queryByText(description)).not.toBeInTheDocument();
    });

    it('calls onDismiss when dismissed', async () => {
      const user = userEvent.setup();
      const onDismiss = jest.fn();
      renderWrapper({ dismissible: true, onDismiss });

      const dismissButton = screen.getByRole('button', { name: 'Close' });
      await act(() => user.click(dismissButton));

      expect(onDismiss).toHaveBeenCalled();
    });
  });
});
