import React from 'react';

import { render, screen } from 'jest-utils';

import { SearchableListItem } from '../SearchableListItem';
import List from '../index';

describe('<SearchableListItem />', () => {
  it('renders the highlight text', () => {
    render(
      <List>
        <SearchableListItem
          label="I am label"
          value="dummy"
          facet="30"
          onClick={jest.fn()}
          isSelected={false}
          highlightIndices={[[0, 4]]}
        />
      </List>,
    );

    const highlight = screen.getByText('I am');
    expect(highlight).toHaveStyle('text-decoration: underline');
    expect(highlight).toHaveStyle(
      'font-weight: var(--chakra-fontWeights-bold)',
    );
    expect(screen.getByText('label')).not.toHaveStyle(
      'text-decoration: underline',
    );
  });

  it('renders multiple highlights', () => {
    render(
      <List>
        <SearchableListItem
          label="I am label"
          facet="30"
          onClick={jest.fn()}
          value="dummy"
          isSelected={false}
          highlightIndices={[
            [2, 3],
            [6, 7],
          ]}
        />
      </List>,
    );
    const highlight1 = screen.getByText('am');
    expect(highlight1).toHaveStyle('text-decoration: underline');
    const highlight2 = screen.getByText('ab');
    expect(highlight2).toHaveStyle('text-decoration: underline');
  });

  it('shows a checkmark in front of the label if selected', () => {
    render(
      <List>
        <SearchableListItem
          label="I am label"
          value="dummy"
          facet="30"
          onClick={jest.fn()}
          isSelected={true}
          highlightIndices={[]}
        />
      </List>,
    );
    expect(
      screen.getByRole('button', { name: /Checkmark icon I am label/ }),
    ).toBeInTheDocument();
  });
});
