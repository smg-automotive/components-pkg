import React, { FC } from 'react';

import { Underline } from './Underline';
import { Highlight } from './Highlight';
import { MarkedTextProps } from '..';

export type MarkProps = Pick<MarkedTextProps, 'variant' | 'highlightColor'>;

export const MarkedTextMark: FC<MarkProps> = (props) => {
  if (props.variant === 'highlight') {
    return <Highlight {...props} />;
  }

  if (props.variant === 'underline') {
    return <Underline {...props} />;
  }

  return null;
};
