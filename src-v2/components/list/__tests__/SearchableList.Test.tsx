import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'jest-utils';

import { SearchableList } from '../SearchableList';
import List from '../index';

const optionOneMock = jest.fn();
const optionTwoMock = jest.fn();
const listItems = [
  {
    value: '1',
    label: 'Parent Option One',
    onClick: optionOneMock,
    showChevron: false,
    isSelected: false,
    facet: '13',
    children: [
      {
        value: '10',
        label: 'Mountain Peak One',
        onClick: jest.fn(),
        showChevron: false,
        isSelected: false,
      },
      {
        value: '11',
        label: 'Desert Rose One',
        onClick: jest.fn(),
        showChevron: false,
        isSelected: false,
      },
      {
        value: '12',
        label: 'Forest Glade Wild',
        onClick: jest.fn(),
        showChevron: false,
        isSelected: false,
      },
    ],
  },
  {
    value: '1',
    label: 'Option Two',
    onClick: optionTwoMock,
    showChevron: false,
    isSelected: false,
    facet: '13',
  },
];

describe('<SearchableList />', () => {
  it('renders the list', () => {
    render(
      <List>
        <SearchableList listItems={listItems} />
      </List>,
    );

    expect(screen.getByText('Parent Option One')).toBeInTheDocument();
    expect(screen.getByText('Option Two')).toBeInTheDocument();
  });

  it('renders the insertion if the filter is empty', () => {
    render(
      <List>
        <SearchableList
          listItems={listItems}
          EmptyQueryPlaceholder={() => <>Insert me</>}
        />
      </List>,
    );

    expect(screen.getByText('Insert me')).toBeInTheDocument();
  });

  it('filters the list', async () => {
    render(
      <List>
        <SearchableList listItems={listItems} />
      </List>,
    );

    const searchField = screen.getByRole('textbox');
    await userEvent.type(searchField, 'Parent');

    await waitFor(() => {
      expect(screen.queryByText('Option Two')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Parent')).toBeInTheDocument();
    expect(screen.getByText('Option One')).toBeInTheDocument();
  });

  it('filters the list by child options', async () => {
    render(
      <List>
        <SearchableList listItems={listItems} />
      </List>,
    );

    const searchField = screen.getByRole('textbox');
    await userEvent.type(searchField, 'Mountain Peak');

    await waitFor(() => {
      expect(screen.queryByText('Option Two')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Parent Option One')).toBeInTheDocument();
    expect(screen.getByText('Mountain Peak One')).toBeInTheDocument();
  });
});
