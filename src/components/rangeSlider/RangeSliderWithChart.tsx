'use client';

import React from 'react';
import { BoxProps } from '@chakra-ui/react';

import { Box } from '../box';
import {
  ChangeCallback,
  NumericMinMaxValue,
  RangeSliderWithScale,
} from './RangeSliderWithScale';
import { Chart } from './Chart';

export type Facet = {
  from: number;
  to?: number | null;
  value: number;
};

export interface RangeSliderWithChartProps {
  facets: Facet[];
  selection: NumericMinMaxValue;
  onSliderChange: (event: ChangeCallback) => void;
  onSliderRelease: (event: ChangeCallback) => void;
  chartHeight?: BoxProps['h'];
}

export const RangeSliderWithChart: React.FC<RangeSliderWithChartProps> = ({
  facets,
  selection,
  onSliderChange,
  onSliderRelease,
  chartHeight = '3xl',
}) => {
  // Create a copy before sorting to avoid mutating the `facets` prop.
  const sortedFacetsByFromKey = [...facets].sort((a, b) => a.from - b.from);
  const scale = sortedFacetsByFromKey.map(({ from }) => from);

  return (
    <RangeSliderWithScale
      onSliderChange={onSliderChange}
      onSliderRelease={onSliderRelease}
      selection={selection}
      scale={scale}
      renderChart={(range: number[]) => (
        <Box mb={'xxs'} h={chartHeight}>
          <Chart range={range} facets={sortedFacetsByFromKey} />
        </Box>
      )}
    />
  );
};
