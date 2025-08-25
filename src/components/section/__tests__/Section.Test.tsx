import React from 'react';

import { render, screen } from 'jest-utils';

import Section from '..';

const renderWrapper = ({
  title = 'title',
  text = 'text',
  image = <img src="foo.png" alt="" />,
}) => {
  render(<Section title={title} text={text} image={image} />);
};

describe('<Section>', () => {
  it('renders title and text', () => {
    const title = 'Are you looking for me?';
    const text = 'Maybe for me too..';
    renderWrapper({ title, text });

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders image', () => {
    const image = (
      <img src="https://via.placeholder.com/302x320" alt="placeholder" />
    );
    renderWrapper({ image });

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://via.placeholder.com/302x320',
    );
  });
});
