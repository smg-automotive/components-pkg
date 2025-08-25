import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor, within } from 'jest-utils';

import { Item } from '../type';
import CheckboxFilter from '../index';

const renderWrapper = ({
  numberOfColumnsOnDesktop = 2,
  options = [
    {
      label: 'New',
      key: 'new',
      facet: 77,
      isChecked: false,
      filterName: 'conditionType',
      childCheckboxes: [],
    },
    {
      label: 'Used',
      key: 'used',
      facet: 0,
      isChecked: false,
      image: <img src="limousine.jpeg" alt="limousine" />,
      filterName: 'conditionType',
      childCheckboxes: [],
    },
  ],
  onApply = jest.fn(),
}: {
  options?: Item<string, string>[];
  onApply?: () => void;
  numberOfColumnsOnDesktop?: number;
} = {}) =>
  render(
    <CheckboxFilter
      items={options}
      onApply={onApply}
      language="de"
      numberOfColumnsOnDesktop={numberOfColumnsOnDesktop}
    />,
  );

describe('<CheckBoxFilter />', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: jest.fn(),
      writable: true,
    });
  });

  it('should render a checkbox for each option', () => {
    renderWrapper();

    expect(screen.getByRole('checkbox', { name: /New/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Used/ })).toBeInTheDocument();
  });

  it('should call onApply', async () => {
    const onApply = jest.fn();
    renderWrapper({ onApply });
    await userEvent.click(screen.getByRole('checkbox', { name: /New/ }));

    await waitFor(() =>
      expect(onApply).toHaveBeenCalledWith({
        label: 'New',
        key: 'new',
        isChecked: true,
        facet: 77,
        filterName: 'conditionType',
        childCheckboxes: [],
      }),
    );
  });

  it('should not disable the checkbox if the checkbox is selected', () => {
    renderWrapper({
      options: [
        {
          label: 'New',
          key: 'new',
          facet: 77,
          isChecked: false,
          filterName: 'conditionType',
          childCheckboxes: [],
        },
        {
          label: 'Used',
          key: 'used',
          facet: 0,
          isChecked: true,
          filterName: 'conditionType',
          childCheckboxes: [],
        },
      ],
    });

    const checkboxFilter = screen.getByRole('checkbox', { name: /Used/ });
    expect(checkboxFilter).toBeEnabled();
  });

  it('should separate the facet number with a thousand separator', () => {
    renderWrapper({
      options: [
        {
          label: 'New',
          key: 'new',
          facet: 77,
          isChecked: false,
          filterName: 'conditionType',
          childCheckboxes: [],
        },
        {
          label: 'Used',
          key: 'used',
          facet: 1000000,
          isChecked: false,
          filterName: 'conditionType',
          childCheckboxes: [],
        },
      ],
    });
    expect(
      screen.getByRole('checkbox', {
        name: 'Used 1’000’000',
      }),
    ).toBeInTheDocument();
  });

  it('should render an image when is passed', () => {
    const image = <img src="kombi.jpeg" alt="kombi" />;
    renderWrapper({
      options: [
        {
          label: 'Used',
          key: 'used',
          facet: 0,
          isChecked: false,
          image,
          filterName: 'conditionTyp¨e',
          childCheckboxes: [],
        },
      ],
    });

    expect(screen.getByRole('img')).toHaveAttribute('src', 'kombi.jpeg');
  });

  describe('collapsible checkbox group filter', () => {
    it('should render a collapsible checkbox group when childCheckboxes is defined', async () => {
      renderWrapper({
        options: [
          {
            label: 'Used',
            key: 'used',
            facet: 0,
            isChecked: false,
            filterName: 'conditionTypeGroup',
            childCheckboxes: [
              {
                label: 'Almost new',
                key: 'almost-new',
                facet: 0,
                isChecked: false,
                filterName: 'conditionType',
              },
            ],
          },
        ],
      });
      expect(
        screen.getByRole('checkbox', {
          name: /Used/,
        }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('checkbox', {
          name: /Almost new/,
        }),
      ).toBeNull();
      const expandButton = screen.getByRole('button', {
        name: 'Used: Mehr anzeigen',
      });
      expect(expandButton).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(expandButton);
      expect(expandButton).toHaveAttribute('aria-expanded', 'true');
      expect(
        await screen.findByRole('checkbox', {
          name: /Almost new/,
        }),
      ).toBeInTheDocument();
    });

    it('should show the child as checked if the parent is checked', async () => {
      renderWrapper({
        options: [
          {
            label: 'Used',
            key: 'used',
            facet: 0,
            isChecked: true,
            filterName: 'conditionTypeGroup',
            childCheckboxes: [
              {
                label: 'Almost new',
                key: 'almost-new',
                facet: 0,
                isChecked: false,
                filterName: 'conditionType',
              },
            ],
          },
        ],
      });
      await userEvent.click(
        screen.getByRole('button', { name: 'Used: Mehr anzeigen' }),
      );
      expect(
        await screen.findByRole('checkbox', {
          name: /Almost new/,
        }),
      ).toBeChecked();
    });

    it('renders correct number of columns and items', () => {
      const columnsNumber = 2;
      const options = [
        {
          label: 'Used',
          key: 'used',
          facet: 0,
          isChecked: true,
          filterName: 'conditionTypeGroup',
          childCheckboxes: [
            {
              label: 'Almost new',
              key: 'almost-new',
              facet: 0,
              isChecked: false,
              filterName: 'conditionType',
            },
          ],
        },
        {
          label: 'New',
          key: 'new',
          facet: 0,
          isChecked: true,
          filterName: 'conditionTypeGroup',
          childCheckboxes: [
            {
              label: 'New new',
              key: 'new-new',
              facet: 0,
              isChecked: false,
              filterName: 'conditionType',
            },
          ],
        },
        {
          label: 'Oldtimer',
          key: 'oldtimer',
          facet: 0,
          isChecked: false,
          filterName: 'conditionType',
          childCheckboxes: [],
        },
        {
          label: 'Newtimer',
          key: 'newtimer',
          facet: 0,
          isChecked: false,
          filterName: 'conditionType',
          childCheckboxes: [],
        },
        {
          label: 'Halftimer',
          key: 'halftimer',
          facet: 0,
          isChecked: false,
          filterName: 'conditionType',
          childCheckboxes: [],
        },
      ];

      renderWrapper({
        numberOfColumnsOnDesktop: columnsNumber,
        options,
      });

      const columns = screen.getAllByTestId('column');
      expect(columns).toHaveLength(columnsNumber);
      const [firstColumn, secondColumn] = columns;
      expect(
        within(firstColumn).getByRole('checkbox', { name: /Used/ }),
      ).toBeInTheDocument();
      expect(
        within(firstColumn).getByRole('checkbox', { name: /New/ }),
      ).toBeInTheDocument();
      expect(
        within(firstColumn).getByRole('checkbox', { name: /Oldtimer/ }),
      ).toBeInTheDocument();
      expect(
        within(secondColumn).getByRole('checkbox', { name: /Newtimer/ }),
      ).toBeInTheDocument();
      expect(
        within(secondColumn).getByRole('checkbox', { name: /Halftimer/ }),
      ).toBeInTheDocument();
    });
  });
});
