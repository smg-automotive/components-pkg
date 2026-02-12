import React from 'react';

import userEvent from '@testing-library/user-event';

import { render, screen } from 'jest-utils';

import { Pagination } from '../index';

const mockOnChange = jest.fn();

describe('<Pagination />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('render', () => {
    it('should not render pagination when totalPages is 1', () => {
      render(
        <Pagination totalPages={1} currentPage={1} onChange={mockOnChange} />,
      );

      const pageButton = screen.queryByRole('button', { name: /page/i });

      expect(pageButton).not.toBeInTheDocument();
    });
  });

  describe('onChange', () => {
    it('should call the onChange handler by click on a button', async () => {
      render(
        <Pagination totalPages={10} currentPage={0} onChange={mockOnChange} />,
      );

      await userEvent.click(screen.getByText('2'));
      expect(mockOnChange).toHaveBeenCalledWith(1);
    });

    describe('first page is active', () => {
      it('should not be able to change the page by click on Prev button', () => {
        render(
          <Pagination
            totalPages={10}
            currentPage={0}
            onChange={mockOnChange}
          />,
        );

        expect(screen.getByLabelText('previous page')).toBeDisabled();
      });

      it('should be able to change the page by click on Next button', async () => {
        render(
          <Pagination
            totalPages={10}
            currentPage={0}
            onChange={mockOnChange}
          />,
        );

        await userEvent.click(screen.getByLabelText('next page'));
        expect(mockOnChange).toHaveBeenCalledWith(1);
      });
    });

    describe('last page is active', () => {
      it('should not be able to change the page by click on Next button', () => {
        render(
          <Pagination
            totalPages={10}
            currentPage={9}
            onChange={mockOnChange}
          />,
        );

        expect(screen.getByLabelText('next page')).toBeDisabled();
      });

      it('should be able to change the page by click on Prev button', async () => {
        render(
          <Pagination
            totalPages={10}
            currentPage={9}
            onChange={mockOnChange}
          />,
        );

        await userEvent.click(screen.getByLabelText('previous page'));
        expect(mockOnChange).toHaveBeenCalledWith(8);
      });
    });
  });
});
