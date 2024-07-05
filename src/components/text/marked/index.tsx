import React, { FC } from 'react';
import { Box, BoxProps, useMultiStyleConfig } from '@chakra-ui/react';

import Highlight from './highlight';

type SharedProps = Exclude<
  BoxProps,
  'position' | 'width' | 'display' | 'alignItems'
>;

type HighlightProps = SharedProps & {
  variant?: 'highlight';
  highlightColor?: 'white' | 'brand';
};

type UnderlineProps = SharedProps & {
  variant: 'underline';
  highlightColor?: never;
};

export type MarkedTextProps = HighlightProps | UnderlineProps;

const MarkedText: FC<MarkedTextProps> = ({
  children,
  variant = 'highlight',
  highlightColor,
  ...boxProps
}) => {
  const { container, text } = useMultiStyleConfig('MarkedText', {
    variant,
    highlightColor,
  });

  return (
    <Box __css={container} {...boxProps}>
      <Highlight variant={variant} highlightColor={highlightColor} />
      <Box __css={text}>{children}</Box>
    </Box>
  );
};

export default MarkedText;
