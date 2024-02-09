import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import CheckboxCollapsible from '../index';

const renderWrapper = ({
  isParentChecked = false,
  isIndeterminate = false,
  parent = {
    label: 'Parent',
    key: 'parent',
    facet: 133,
    isParent: true,
  },
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
  isCollapsible = true,
  onApply = jest.fn(),
} = {}) =>
  render(
    <CheckboxCollapsible
      isCollapsible={isCollapsible}
      isIndeterminate={isIndeterminate}
      parent={{ ...parent, isChecked: isParentChecked }}
      isParentChecked={isParentChecked}
      checkboxes={options}
      onApply={onApply}
    />
  );

describe('<CheckboxCollapsible />', () => {
  it('should render a not expanded list', () => {
    renderWrapper();

    expect(screen.getByLabelText('Expand')).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /Parent/ })
    ).toBeInTheDocument();
  });

  it('should expand the content on icon button click', async () => {
    renderWrapper();

    expect(screen.getByLabelText('Expand')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Expand'));

    expect(screen.getByLabelText('Collapse')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /New/ })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Used/ })).toBeInTheDocument();
  });

  it('should call onApply when child is checked and get new state', async () => {
    const onApply = jest.fn();
    renderWrapper({ onApply });

    expect(screen.getByLabelText('Expand')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Expand'));

    await userEvent.click(screen.getByRole('checkbox', { name: /New/ }));

    await waitFor(() =>
      expect(onApply).toHaveBeenCalledWith(
        { label: 'New', key: 'new', isChecked: true, facet: 77 },
        { new: true, used: false }
      )
    );
  });

  it('should call onApply when parent is checked and have all checkboxes checked', async () => {
    const onApply = jest.fn();
    renderWrapper({ onApply });

    expect(screen.getByLabelText('Expand')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Expand'));

    await userEvent.click(screen.getByRole('checkbox', { name: /Parent/ }));

    await waitFor(() =>
      expect(onApply).toHaveBeenCalledWith(
        {
          label: 'Parent',
          key: 'parent',
          isChecked: true,
          facet: 133,
          isParent: true,
        },
        { new: true, used: true, parent: true }
      )
    );
  });
});
