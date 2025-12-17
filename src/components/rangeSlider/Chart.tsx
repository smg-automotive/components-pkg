'use client';

import React from 'react';

import { Flex } from '../flex';
import { Box } from '../box';
import { Facet } from './RangeSliderWithChart';

interface Props {
  facets?: Facet[];
  range: number[];
  height?: 'sm' | 'normal';
}

export const Chart: React.FC<Props> = ({ facets, range }) => {
  if (!facets || facets.length === 0) {
    return null;
  }

  const maxValue = Math.max(...facets.map(({ value }) => value));

  return (
    <Flex justify="space-between" h="full" data-testid="chart">
      {facets.map(({ from }, index) => (
        <Box
          h="full"
          style={{ marginInline: '1px' }}
          flexGrow={1}
          key={from}
          bg={
            index < range[0] || index > range[1] - 1 ? 'gray.200' : 'gray.500'
          }
          transitionProperty="common"
          transitionDuration="slow"
          transformOrigin="bottom"
          transform={`scaleY(${
            maxValue > 0 ? facets[index].value / maxValue : 0
          })`}
        />
      ))}
    </Flex>
  );
};
