import React, { useMemo } from 'react';

import Box from '../box';
import Flex from '../flex';

import PaginationButton from './PaginationButton';

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '../icons';

const Dots = '...';
const range = (start: number, end: number): Array<number> => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const Pagination = (props: any) => {
  const {
    onChange,
    count,
    page,
    siblingCount = 1,
  } = props;

  const paginationRange = useMemo(() => {

    // Default number of page buttons: firstPage + lastPage + currentPage + left side dots + right side dots
    const pageButtonsCount = 5;

    const totalPageButtonsCount = siblingCount + pageButtonsCount;

    if (totalPageButtonsCount >= count) {
      return range(1, count);
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      page + siblingCount,
      count
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < count - 2;

    const firstPageIndex = 1;
    const lastPageIndex = count;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = pageButtonsCount * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, Dots, count];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = pageButtonsCount * siblingCount;
      let rightRange = range(
        count - rightItemCount + 1,
        count
      );
      return [firstPageIndex, Dots, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, Dots, ...middleRange, Dots, lastPageIndex];
    }

    return [];
  }, [count, siblingCount, page]);


  if (page === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => onChange(page + 1);
  const onPrevious = () => onChange(page - 1);

  const isDisabled = page === 1;
  const isLastPage = page === paginationRange[paginationRange.length - 1];

  return (
    <Flex>
      <PaginationButton
        isDisabled={isDisabled}
        onClick={onPrevious}
      >
        <ChevronLeftLargeIcon />
      </PaginationButton>
      {
        paginationRange.map(pageNumber => {
          if (pageNumber === Dots) {
            return <Box className="pagination-item dots">&#8230;</Box>;
          }

          return (
            <PaginationButton
              isSelected={pageNumber === page}
              onClick={() => onChange(pageNumber)}
            >
              {pageNumber}
            </PaginationButton>
          );
        })
      }
      <PaginationButton
        isDisabled={isLastPage}
        onClick={onNext}
      >
        <ChevronRightLargeIcon />
      </PaginationButton>
    </Flex>
  );
};

export default Pagination;
