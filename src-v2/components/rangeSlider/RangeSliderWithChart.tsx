import React from 'react';
import { BoxProps } from '@chakra-ui/react';

import Box from '../box';
import RangeSliderWithScale, {
  ChangeCallback,
  NumericMinMaxValue,
} from './RangeSliderWithScale';
import Chart from './Chart';

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

const RangeSliderWithChart: React.FC<RangeSliderWithChartProps> = ({
  facets,
  selection,
  onSliderChange,
  onSliderRelease,
  chartHeight = '3xl',
}) => {
  const sortedFacetsByFromKey = facets.sort((a, b) => a.from - b.from);
  const scale = sortedFacetsByFromKey.map(({ from }) => from);

  return (
    <RangeSliderWithScale
      onSliderChange={onSliderChange}
      onSliderRelease={onSliderRelease}
      selection={selection}
      scale={scale}
      renderChart={(range: number[]) => (
        <Box position="relative" top="sm" h={chartHeight}>
          <Chart range={range} facets={sortedFacetsByFromKey} />
        </Box>
      )}
    />
  );
};

export default RangeSliderWithChart;
