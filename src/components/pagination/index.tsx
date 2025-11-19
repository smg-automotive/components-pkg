'use client';

import React, { FC } from 'react';
import {
  Box,
  BoxProps,
  Pagination as ChakraPagination,
  IconButton,
  useSlotRecipe,
} from '@chakra-ui/react';

import { ChevronLeftSmallIcon, ChevronRightSmallIcon } from '../icons';

export type PaginationProps = {
  totalPages: number;
  /**
   * index of the current page, zero-based
   */
  currentPage: number;
  /**
   * @param page zero-based page index
   */
  onChange: (page: number) => void;
} & Pick<BoxProps, 'marginTop' | 'marginBottom'>;

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage = 0,
  onChange,
  marginBottom,
  marginTop,
}) => {
  const recipe = useSlotRecipe({ key: 'pagination' as const });

  const styles = recipe();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <ChakraPagination.Root
      count={totalPages}
      pageSize={1}
      page={currentPage + 1}
      onPageChange={(e) => onChange(e.page - 1)}
    >
      <Box
        marginTop={marginTop}
        marginBottom={marginBottom}
        css={styles.paginationContainer}
      >
        <ChakraPagination.PrevTrigger
          asChild
          css={styles.paginationButton}
          display={{ base: 'none', xs: 'inline-flex' }}
        >
          <IconButton>
            <ChevronLeftSmallIcon />
          </IconButton>
        </ChakraPagination.PrevTrigger>

        <ChakraPagination.Context>
          {({ pages }) =>
            pages.map((page, index) =>
              page.type === 'page' ? (
                <ChakraPagination.Item
                  key={index}
                  {...page}
                  css={styles.paginationButton}
                >
                  {page.value}
                </ChakraPagination.Item>
              ) : (
                <ChakraPagination.Ellipsis
                  css={styles.dots}
                  key={index}
                  index={index}
                >
                  &#8230;
                </ChakraPagination.Ellipsis>
              ),
            )
          }
        </ChakraPagination.Context>

        <ChakraPagination.NextTrigger
          asChild
          css={styles.paginationButton}
          display={{ base: 'none', xs: 'inline-flex' }}
        >
          <IconButton>
            <ChevronRightSmallIcon />
          </IconButton>
        </ChakraPagination.NextTrigger>
      </Box>
    </ChakraPagination.Root>
  );
};
