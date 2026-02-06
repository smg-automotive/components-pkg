import React, { PropsWithChildren } from 'react';

import { Box as BoxComponents, BoxProps } from 'src/components/box';

type Props = Omit<BoxProps, 'textColor'> & {
  textColor?: BoxProps['color'];
  ref?: React.Ref<unknown>;
  spacing?: BoxProps['gap'];
};

export const Box: React.FC<PropsWithChildren<Props>> = (props) => {
  const { textColor, spacing, ...rest } = props;
  return (
    <BoxComponents color={textColor} gap={spacing} {...rest} ref={props.ref} />
  );
};
