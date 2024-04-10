import React, { FC, PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

import as24Highlight from 'src/assets/images/highlight.svg';

type HighlightProps = {
  variant: 'as24' | 'ms24' | 'neutral';
};

const Highlight: FC<PropsWithChildren<HighlightProps>> = ({
  variant,
  children,
}) => {
  // Convert children to a string and get its length
  const childrenLength = React.Children.toArray(children).reduce(
    (acc, child) => {
      // If the child is a string or a number, add its length to the accumulator
      if (typeof child === 'string' || typeof child === 'number') {
        return acc + child.toString().length;
      }
      // Otherwise, just return the current accumulator value
      return acc;
    },
    0
  );

  console.log('CHILDREN LENGTH', childrenLength);
  return (
    <Box
      bgImage={as24Highlight}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="contain"
      paddingLeft="xs"
      paddingRight="md"
      width="fit-content"
      display="flex"
      justifyContent="center"
      height="auto"
    >
      <Box marginY="sm">{children}</Box>
    </Box>
  );
};

export default Highlight;
