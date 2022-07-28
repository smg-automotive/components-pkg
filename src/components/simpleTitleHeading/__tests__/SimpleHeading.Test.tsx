import React from 'react';
import { render, screen } from '@testing-library/react';

import SimpleHeading from '..';

const renderWrapper = ({
  title = 'title',
  url = 'https://www.motoscout24.ch/de',
}) => render(<SimpleHeading title={title} url={url} />);

describe('SimpleHeading', () => {
  it('renders title', () => {
    const title = 'Are you looking for me?';
    renderWrapper({ title });

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('leads to a link when clicking on close', () => {
    const url = 'https://www.autoscout24.ch/de';
    renderWrapper({ url });
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
