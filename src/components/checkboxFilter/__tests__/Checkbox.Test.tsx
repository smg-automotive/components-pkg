import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import CheckboxFilter from '../index';

const renderWrapper = ({
  options = [
    { label: 'New', key: 'new', facet: 77, isChecked: false },
    {
      label: 'Used',
      key: 'used',
      facet: 0,
      isChecked: false,
      image: <img src="limousine.jpeg" />,
    },
  ],
  onApply = jest.fn(),
} = {}) => render(<CheckboxFilter items={options} onApply={onApply} />);

describe('<CheckBoxFilter />', () => {
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
      expect(onApply).toHaveBeenCalledWith(
        { label: 'New', key: 'new', isChecked: true, facet: 77 },
        { new: true, used: false },
      ),
    );
  });

  it('should not disable the checkbox if the checkbox is selected', () => {
    renderWrapper({
      options: [
        { label: 'New', key: 'new', facet: 77, isChecked: false },
        { label: 'Used', key: 'used', facet: 0, isChecked: true },
      ],
    });

    const checkboxFilter = screen.getByRole('checkbox', { name: /Used/ });
    expect(checkboxFilter).toBeEnabled();
  });

  it('should separate the facet number with a thousand separator', () => {
    renderWrapper({
      options: [
        { label: 'New', key: 'new', facet: 77, isChecked: false },
        { label: 'Used', key: 'used', facet: 1000000, isChecked: false },
      ],
    });
    expect(
      screen.getByRole('checkbox', {
        name: 'Used 1’000’000',
      }),
    ).toBeInTheDocument();
  });

  it('should render an image when is passed', () => {
    const image = <img src="kombi.jpeg" />;
    renderWrapper({
      options: [
        {
          label: 'Used',
          key: 'used',
          facet: 0,
          isChecked: false,
          image,
        },
      ],
    });

    expect(screen.getByRole('img')).toHaveAttribute('src', 'kombi.jpeg');
  });
});
