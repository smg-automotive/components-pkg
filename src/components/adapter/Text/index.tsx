import React, { FC, PropsWithChildren } from 'react';

import { Text as TextComponents, TextProps } from 'src/components/text';

type Props = Omit<TextProps, 'truncated'> & {
  isTruncated?: boolean;
  textColor?: TextProps['color'];
};

export const Text: FC<PropsWithChildren<Props>> = (props) => {
  const { isTruncated, textColor, ...rest } = props;
  return (
    <TextComponents
      {...rest}
      truncate={isTruncated}
      {...(textColor ? { color: textColor } : {})}
    />
  );
};
