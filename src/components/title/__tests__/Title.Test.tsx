import React from 'react';

import { render, screen } from '@testing-library/react';

import Title from '..';

const renderWrapper = ({ title = 'title', image = <img src="foo.png" /> }) => {
  render(<Title variant="page" title={title} image={image} />);
};

describe('<Title>', () => {
  it('renders title', () => {
    const title = 'Are you looking for me?';
    renderWrapper({ title });

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders image only in page variant', () => {
    const image = <img src="https://via.placeholder.com/302x320" />;
    renderWrapper({ image });

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://via.placeholder.com/302x320'
    );
  });
});
