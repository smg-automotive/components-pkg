import React, { FC, MouseEvent, PropsWithChildren, useMemo } from 'react';
import { BoxProps, Show, useMultiStyleConfig } from '@chakra-ui/react';

import { ChevronLeftSmallIcon, ChevronRightSmallIcon } from '../icons';
import Box from '../box';
import PaginationButton from './PaginationButton';

const Dots = '...';
const siblingCount = 1;
const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export type Props = {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
} & Pick<BoxProps, 'marginTop' | 'marginBottom'>;

const Pagination: FC<PropsWithChildren<Props>> = (props) => {
  const {
    onChange,
    totalPages,
    currentPage = 0,
    marginTop,
    marginBottom,
  } = props;
  const { paginationContainer, dots } = useMultiStyleConfig('Pagination');

  const paginationRange = useMemo(() => {
    // Default number of page buttons: firstPage + lastPage + currentPage + left side dots + right side dots
    const pageButtonsCount = 5;
    const totalPageButtonsCount = siblingCount * 2 + pageButtonsCount;

    if (totalPageButtonsCount >= totalPages) {
      return range(0, totalPages - 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 0);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages - 1,
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 3;

    const firstPageNumber = 0;
    const lastPageNumber = totalPages - 1;

    // Show dots on right side
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(0, leftItemCount - 1);
      return [...leftRange, Dots, lastPageNumber];
    }

    // Show dots on left side
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount, totalPages - 1);
      return [firstPageNumber, Dots, ...rightRange];
    }

    // Show dots on both sides
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageNumber, Dots, ...middleRange, Dots, lastPageNumber];
    }

    return [];
  }, [totalPages, currentPage]);

  if (paginationRange.length < 2) {
    return null;
  }

  const onNext = (e: MouseEvent) => {
    e.preventDefault();
    onChange(currentPage + 1);
  };
  const onPrevious = (e: MouseEvent) => {
    e.preventDefault();
    onChange(currentPage - 1);
  };

  const isFirstPage = currentPage === 0;
  const isLastPage =
    currentPage === paginationRange[paginationRange.length - 1];

  const pageNumberToDispaly = (pageNumber: number) => {
    if (pageNumber === totalPages) {
      return pageNumber;
    }
    return pageNumber + 1;
  };

  return (
    <Box
      marginTop={marginTop}
      marginBottom={marginBottom}
      __css={paginationContainer}
    >
      <Show above="xs">
        <PaginationButton
          isDisabled={isFirstPage}
          onClick={onPrevious}
          ariaLabel="previous page"
        >
          <ChevronLeftSmallIcon color={isFirstPage ? 'gray.300' : 'gray.900'} />
        </PaginationButton>
      </Show>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === Dots) {
          return (
            <Box
              __css={dots}
              key={`paginationDots-${index}`}
              aria-label={index === 1 ? 'left side dots' : 'right side dots'}
            >
              &#8230;
            </Box>
          );
        }

        return (
          <PaginationButton
            key={`paginationButton-${index}`}
            isActive={pageNumber === currentPage}
            ariaLabel={`go to page ${pageNumberToDispaly(
              Number(pageNumber),
            )} of ${totalPages}`}
            onClick={(e) => {
              e.preventDefault();
              onChange(Number(pageNumber));
            }}
          >
            {pageNumberToDispaly(Number(pageNumber))}
          </PaginationButton>
        );
      })}
      <Show above="xs">
        <PaginationButton
          isDisabled={isLastPage}
          onClick={onNext}
          ariaLabel="next page"
        >
          <ChevronRightSmallIcon color={isLastPage ? 'gray.300' : 'gray.900'} />
        </PaginationButton>
      </Show>
    </Box>
  );
};

export default Pagination;
