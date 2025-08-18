import React from 'react';

import SimpleHeader from '..';

import { render, screen } from 'jest-utils';

const renderWrapper = ({
  title = 'title',
  url = 'https://www.motoscout24.ch/de',
}) => render(<SimpleHeader title={title} url={url} />);

describe('<SimpleHeader>', () => {
  it('renders title', () => {
    const title = 'Are you looking for me?';
    renderWrapper({ title });

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('leads to a link when clicking on close icon', () => {
    const url = 'https://www.autoscout24.ch/de';
    renderWrapper({ url });
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', url);
  });
});
