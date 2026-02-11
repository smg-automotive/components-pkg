import React, { FC, PropsWithChildren } from 'react';

import { Text as TextComponents, TextProps } from 'src/components/text';

type Props = Omit<TextProps, 'truncated' | 'lineClamp'> & {
  noOfLines?: number;
  isTruncated?: boolean;
  textColor?: TextProps['color'];
};

export const Text: FC<PropsWithChildren<Props>> = (props) => {
  const { isTruncated, textColor, noOfLines, ...rest } = props;
  return (
    <TextComponents
      {...rest}
      lineClamp={noOfLines}
      truncate={isTruncated}
      {...(textColor ? { color: textColor } : {})}
    />
  );
};
