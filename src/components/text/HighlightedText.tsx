import React, { FC, ReactNode } from 'react';

import { TextProps } from '@chakra-ui/react';

import Text from './index';

type Props = {
  text: string;
  highlightIndices?: ReadonlyArray<[number, number]>;
} & Omit<TextProps, 'as' | 'fontWeight'>;

const HighlightedText: FC<Props> = ({
  text,
  highlightIndices = [],
  ...textProps
}) => {
  if (highlightIndices.length === 0)
    return (
      <Text as="span" {...textProps}>
        {text}
      </Text>
    );

  const result: ReactNode[] = [];
  let currentIndex = 0;
  for (const [start, end] of highlightIndices) {
    // Append the non-matching part
    result.push(
      <Text
        key={`non-highlight-${currentIndex}-${start}-${text}`}
        as="span"
        {...textProps}
      >
        {text.substring(currentIndex, start)}
      </Text>,
    );

    // Append the matching part
    result.push(
      <Text
        key={`highlight-${start}-${end + 1}-${text}`}
        as="u"
        fontWeight="bold"
        {...textProps}
      >
        {text.substring(start, end + 1)}
      </Text>,
    );

    currentIndex = end + 1;
  }

  // Append the remaining non-matching part
  result.push(
    <Text key={`non-highlight-end-${text}`} as="span" {...textProps}>
      {text.substring(currentIndex)}
    </Text>,
  );

  return (
    <Text as="span" {...textProps}>
      {result}
    </Text>
  );
};

export default HighlightedText;
