import React, { FC, PropsWithChildren, useMemo } from 'react';
import { useMediaQuery, useMultiStyleConfig } from '@chakra-ui/react';

import PaginationButton from './PaginationButton';
import { ChevronLeftSmallIcon, ChevronRightSmallIcon } from '../icons';
import Box from '../box';
import { breakpoints } from '../../themes';

const Dots = '...';
const siblingCount = 1;
const range = (start: number, end: number): Array<number> => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export interface Props {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const Pagination: FC<PropsWithChildren<Props>> = (props) => {
  const { onChange, totalPages, currentPage } = props;
  const { paginationContainer, dots } = useMultiStyleConfig('Pagination');
  const [isLargerThanXs] = useMediaQuery(`(min-width: ${breakpoints.xs.px}px)`);

  const paginationRange = useMemo(() => {
    // Default number of page buttons: firstPage + lastPage + currentPage + left side dots + right side dots
    const pageButtonsCount = 5;
    const totalPageButtonsCount = siblingCount + pageButtonsCount;

    if (totalPageButtonsCount >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, Dots, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, Dots, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, Dots, ...middleRange, Dots, lastPageIndex];
    }

    return [];
  }, [totalPages, currentPage]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => onChange(currentPage + 1);
  const onPrevious = () => onChange(currentPage - 1);

  const isLastPage =
    currentPage === paginationRange[paginationRange.length - 1];

  return (
    <Box __css={paginationContainer}>
      {isLargerThanXs ? (
        <PaginationButton
          isDisabled={currentPage === 1}
          onClick={onPrevious}
          ariaLabel="prev page"
        >
          <ChevronLeftSmallIcon
            color={currentPage === 1 ? 'gray.300' : 'gray.900'}
          />
        </PaginationButton>
      ) : null}
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
            ariaLabel={`go to page ${pageNumber} of ${totalPages}`}
            onClick={() => onChange(pageNumber as number)}
          >
            {pageNumber}
          </PaginationButton>
        );
      })}
      {isLargerThanXs ? (
        <PaginationButton
          isDisabled={isLastPage}
          onClick={onNext}
          ariaLabel="next page"
        >
          <ChevronRightSmallIcon color={isLastPage ? 'gray.300' : 'gray.900'} />
        </PaginationButton>
      ) : null}
    </Box>
  );
};

export default Pagination;
