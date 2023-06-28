import React from 'react';

import Flex from '../flex';
import Box from '../box';

interface Props {
  facets?: Record<string, number>;
  range: number[];
}

const Chart: React.FC<Props> = ({ facets, range }) => {
  if (!facets) {
    return null;
  }

  const maxValue = Math.max(...Object.values(facets));

  return (
    <Flex justify="space-between" h="3xl">
      {Object.keys(facets).map((key, index) => (
        <Box
          h="full"
          mx="1px"
          flexGrow={1}
          key={key}
          bg={
            index < range[0] || index > range[1] - 1 ? 'gray.400' : 'gray.900'
          }
          transition="transform 1s"
          transformOrigin="bottom"
          transform={`scaleY(${maxValue > 0 ? facets[key] / maxValue : 0})`}
        />
      ))}
    </Flex>
  );
};

export default Chart;
