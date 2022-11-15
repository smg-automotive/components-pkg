import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Pagination from '../index';

const mockOnChange = jest.fn();
const renderWrapper = (count = 5, page = 1) => {
  return render(
    <Pagination count={count} page={page} onChange={mockOnChange} />
  );
};

describe('<Pagination />', () => {
  it('should render with next/prev buttons', async () => {
    renderWrapper();

    const prev = screen.getByTestId('prev-button');
    const next = screen.getByTestId('next-button');

    expect(prev).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });

  it('should render without next/prev buttons with one page', async () => {
    renderWrapper(1);

    const prev = screen.queryByTestId('prev-button');
    const next = screen.queryByTestId('next-button');

    expect(prev).not.toBeInTheDocument();
    expect(next).not.toBeInTheDocument();
  });

  it('should respect current page', async () => {
    renderWrapper();

    const currentPage = screen.getByText('1');
    expect(currentPage).toHaveAttribute('aria-current', 'true');
  });

  it('should call the onChange handler by click on a button', async () => {
    renderWrapper();

    await userEvent.click(screen.getByText('2'));
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('should has prev button as disabled when first page is active', async () => {
    renderWrapper(10, 1);

    const prev = screen.getByTestId('prev-button');
    expect(prev).toBeDisabled();
  });

  it('should has next button as disabled when last page is active', async () => {
    renderWrapper(10, 10);

    const next = screen.getByTestId('next-button');
    expect(next).toBeDisabled();
  });
});
