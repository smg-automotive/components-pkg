import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Pagination from '../index';

const mockOnChange = jest.fn();
const renderWrapper = (totalPages = 5, currentPage = 1) => {
  return render(
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onChange={mockOnChange}
    />
  );
};

describe('<Pagination />', () => {
  describe('render', () => {
    it('should render pagination without dots', () => {
      renderWrapper(5, 1);

      const leftDots = screen.queryByLabelText('left side dots');
      const rightDots = screen.queryByLabelText('right side dots');

      expect(leftDots).not.toBeInTheDocument();
      expect(rightDots).not.toBeInTheDocument();
    });

    it('should render pagination with dots on right side', () => {
      renderWrapper(10, 1);

      const leftDots = screen.queryByLabelText('left side dots');
      const rightDots = screen.queryByLabelText('right side dots');

      expect(leftDots).not.toBeInTheDocument();
      expect(rightDots).toBeInTheDocument();
    });

    it('should render pagination with dots on left side', () => {
      renderWrapper(10, 10);

      const leftDots = screen.queryByLabelText('left side dots');
      const rightDots = screen.queryByLabelText('right side dots');

      expect(leftDots).toBeInTheDocument();
      expect(rightDots).not.toBeInTheDocument();
    });

    it('should render pagination with dots on both side', () => {
      renderWrapper(10, 5);

      const leftDots = screen.queryByLabelText('left side dots');
      const rightDots = screen.queryByLabelText('right side dots');

      expect(leftDots).toBeInTheDocument();
      expect(rightDots).toBeInTheDocument();
    });

    it('should respect current page', () => {
      renderWrapper(10, 1);

      const currentPage = screen.getByText('1');
      expect(currentPage).toHaveAttribute('aria-current', 'true');
    });
  });

  describe('onChange', () => {
    it('should call the onChange handler by click on a button', async () => {
      renderWrapper(10, 1);

      await userEvent.click(screen.getByText('2'));
      expect(mockOnChange).toHaveBeenCalledWith(2);
    });

    describe('first page is active', () => {
      it('should not be able to change the page by click on Prev button', () => {
        renderWrapper(10, 1);

        expect(screen.getByLabelText('prev page')).toBeDisabled();
      });

      it('should be able to change the page by click on Next button', async () => {
        renderWrapper(10, 1);

        await userEvent.click(screen.getByLabelText('next page'));
        expect(mockOnChange).toHaveBeenCalledWith(2);
      });
    });

    describe('last page is active', () => {
      it('should not be able to change the page by click on Next button', () => {
        renderWrapper(10, 10);

        expect(screen.getByLabelText('next page')).toBeDisabled();
      });

      it('should be able to change the page by click on Prev button', async () => {
        renderWrapper(10, 10);

        await userEvent.click(screen.getByLabelText('prev page'));
        expect(mockOnChange).toHaveBeenCalledWith(9);
      });
    });
  });
});
