import React, { FC, PropsWithChildren } from 'react';

import { ConditionalValue } from '@chakra-ui/react';

import { Text as TextComponents, TextProps } from 'src/components/text';

type Props = Omit<TextProps, 'truncated' | 'lineClamp'> & {
  noOfLines?: ConditionalValue<number>;
  isTruncated?: boolean;
  textColor?: TextProps['color'];
  align?: TextProps['textAlign'];
};

export const Text: FC<PropsWithChildren<Props>> = (props) => {
  const { isTruncated, textColor, noOfLines, align, ...rest } = props;
  return (
    <TextComponents
      {...rest}
      lineClamp={noOfLines}
      truncate={isTruncated}
      {...(align ? { textAlign: align } : {})}
      {...(textColor ? { color: textColor } : {})}
    />
  );
};
