import React from 'react';

import { OverflowVerticalIcon } from 'src/components/icons';

import { render, screen } from 'jest-utils';

import Menu from '../index';

describe('Menu', () => {
  it('should render MenuButton with chevron and title', () => {
    render(<Menu title="Test title" items={[]} />);

    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeVisible();
    expect(menuButton).toHaveTextContent('Test title');

    const chevronIcon = screen.getByTitle('Chevron down small icon');
    expect(chevronIcon).toBeInTheDocument();
  });
  it('should not render chevron in MenuButton when showChevron is false', () => {
    render(<Menu title="Test title" items={[]} showChevron={false} />);

    const chevronIcon = screen.queryByTitle('Chevron down small icon');
    expect(chevronIcon).not.toBeInTheDocument();
  });
  it('should render icon in MenuButton when icon is provided', () => {
    render(
      <Menu
        title="Test title"
        items={[]}
        showChevron={false}
        icon={<OverflowVerticalIcon />}
      />,
    );

    const icon = screen.getByTitle('Overflow vertical icon');
    expect(icon).toBeInTheDocument();
  });
  it('should render MenuButton title as a ReactElement', () => {
    render(<Menu title={<span>Test title</span>} items={[]} />);

    const title = screen.getByText('Test title');
    expect(title).toBeInTheDocument();
  });
});
