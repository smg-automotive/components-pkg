import React, { FC, PropsWithChildren, useMemo } from 'react';
import { useMultiStyleConfig } from '@chakra-ui/react';

import PaginationButton, { paginationButtonVariant } from './PaginationButton';
import { ChevronLeftSmallIcon, ChevronRightSmallIcon } from '../icons';
import Box from '../box';

const Dots = '...';
const range = (start: number, end: number): Array<number> => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export interface Props {
  count: number;
  page: number;
  siblingCount?: number;
  onChange: (e: unknown) => void;
}

const Pagination: FC<PropsWithChildren<Props>> = (props) => {
  const { onChange, count, page, siblingCount = 1 } = props;
  const { paginationContainer } = useMultiStyleConfig('Pagination');

  const paginationRange = useMemo(() => {
    // Default number of page buttons: firstPage + lastPage + currentPage + left side dots + right side dots
    const pageButtonsCount = 5;
    const totalPageButtonsCount = siblingCount + pageButtonsCount;

    if (totalPageButtonsCount >= count) {
      return range(1, count);
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, count);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < count - 2;

    const firstPageIndex = 1;
    const lastPageIndex = count;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, Dots, count];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(count - rightItemCount + 1, count);
      return [firstPageIndex, Dots, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, Dots, ...middleRange, Dots, lastPageIndex];
    }

    return [];
  }, [count, siblingCount, page]);

  if (page === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => onChange(page + 1);
  const onPrevious = () => onChange(page - 1);

  const isLastPage = page === paginationRange[paginationRange.length - 1];

  return (
    <Box __css={paginationContainer}>
      <PaginationButton isDisabled={page === 1} onClick={onPrevious}>
        <ChevronLeftSmallIcon color={page === 1 ? 'gray.300' : 'gray.900'} />
      </PaginationButton>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === Dots) {
          return <Box key={`paginationButton-${index}`}>&#8230;</Box>;
        }

        return (
          <PaginationButton
            key={`paginationButton-${index}`}
            variant={pageNumber === page ? paginationButtonVariant.active : paginationButtonVariant.default}
            onClick={() => onChange(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        );
      })}
      <PaginationButton isDisabled={isLastPage} onClick={onNext}>
        <ChevronRightSmallIcon color={isLastPage ? 'gray.300' : 'gray.900'} />
      </PaginationButton>
    </Box>
  );
};

export default Pagination;
