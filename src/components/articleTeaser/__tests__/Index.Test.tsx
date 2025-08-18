import React from 'react';

import { render, screen } from 'jest-utils';

import ArticleTeaser from '..';

const renderWrapper = ({
  title = 'title',
  text = 'text',
  imageUrl = 'https://img.com',
  url = 'https://link.com',
} = {}) =>
  render(
    <ArticleTeaser title={title} text={text} imageUrl={imageUrl} url={url} />,
  );

describe('ArticleTeaser', () => {
  it('renders the title', () => {
    const title = 'I am title';
    renderWrapper({ title });

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the text', () => {
    const text = 'I am a very long teaser text';
    renderWrapper({ text });

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders the image', () => {
    const imageUrl = 'https://placeholder.com/800x600';
    renderWrapper({ imageUrl });

    expect(screen.getByRole('img')).toHaveAttribute('src', imageUrl);
  });

  it('links to the article', () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    renderWrapper({ url });

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
