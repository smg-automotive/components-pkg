import React from 'react';

import { render, screen } from '@testing-library/react';

import Alert from '../index';

const MockIcon = () => <svg data-testid="test-icon" />;

describe('<Alert>', () => {
  it('renders Alert with title', () => {
    render(
      <Alert
        title="I am the title"
        typeMessage="info"
        description="I am a description"
        icon={<MockIcon />}
      />
    );

    expect(screen.getByText('I am the title')).toBeInTheDocument();
  });

  it('renders Alert with link', () => {
    render(
      <Alert
        typeMessage="info"
        description="I am a description"
        link={{
          url: 'https://www.autoscout24.ch/de',
          text: 'Link',
        }}
        icon={<MockIcon />}
      />
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.autoscout24.ch/de');
  });

  describe('Variations', () => {
    it('renders information alert message correctly', () => {
      const view = render(
        <Alert
          typeMessage="info"
          description="I am a description"
          icon={<MockIcon />}
        />
      );

      expect(view.container).toMatchSnapshot();
    });

    it('renders error alert message correctly', () => {
      const view = render(
        <Alert
          typeMessage="error"
          description="I am a description"
          icon={<MockIcon />}
        />
      );

      expect(view.container).toMatchSnapshot();
    });

    it('renders warning alert message correctly', () => {
      const view = render(
        <Alert
          typeMessage="warning"
          description="I am a description"
          icon={<MockIcon />}
        />
      );

      expect(view.container).toMatchSnapshot();
    });

    it('renders success alert message correctly', () => {
      const view = render(
        <Alert
          typeMessage="success"
          description="I am a description"
          icon={<MockIcon />}
        />
      );

      expect(view.container).toMatchSnapshot();
    });
  });
});
