import React, { FC } from 'react';

import { MarkedTextProps } from '..';

import Underline from './Underline';
import Highlight from './Highlight';

export type HighlightProps = Pick<
  MarkedTextProps,
  'variant' | 'highlightColor'
>;

const MarkedTextHighlight: FC<HighlightProps> = (props) => {
  if (props.variant === 'highlight') {
    return <Highlight {...props} />;
  }

  if (props.variant === 'underline') {
    return <Underline {...props} />;
  }

  return null;
};

export default MarkedTextHighlight;
