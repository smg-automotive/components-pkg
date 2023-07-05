import React from 'react';

import Flex from '../flex';
import Box from '../box';
import { Facet } from './RangeSliderWithChart';

interface Props {
  facets?: Array<Facet>;
  range: number[];
}

const Chart: React.FC<Props> = ({ facets, range }) => {
  if (!facets || facets.length === 0) {
    return null;
  }

  const maxValue = Math.max(...facets.map(({ value }) => value));

  return (
    <Flex justify="space-between" h="3xl">
      {facets.map(({ from }, index) => (
        <Box
          h="full"
          mx="1px"
          flexGrow={1}
          key={from}
          bg={
            index < range[0] || index > range[1] - 1 ? 'gray.300' : 'gray.900'
          }
          transition="transform 1s"
          transformOrigin="bottom"
          transform={`scaleY(${
            maxValue > 0 ? facets[index].value / maxValue : 0
          })`}
        />
      ))}
    </Flex>
  );
};

export default Chart;
