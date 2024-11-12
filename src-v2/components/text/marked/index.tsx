import React, { FC } from 'react';
import { Box, BoxProps, useMultiStyleConfig } from '@chakra-ui/react';

import Mark from './mark';

type SharedProps = Exclude<
  BoxProps,
  'position' | 'width' | 'display' | 'alignItems'
>;

type HighlightProps = SharedProps & {
  variant?: 'highlight';
  highlightColor?: 'white' | 'gray.100' | 'brand.primary';
};

type UnderlineProps = SharedProps & {
  variant: 'underline';
  highlightColor?: never;
};

export type MarkedTextProps = HighlightProps | UnderlineProps;

const MarkedText: FC<MarkedTextProps> = ({
  children,
  variant = 'highlight',
  highlightColor = 'brand.primary',
  ...boxProps
}) => {
  const { container, text } = useMultiStyleConfig('MarkedText', {
    variant,
    highlightColor,
  });

  return (
    <Box __css={container} {...boxProps}>
      <Mark variant={variant} highlightColor={highlightColor} />
      <Box __css={text}>{children}</Box>
    </Box>
  );
};

export default MarkedText;
