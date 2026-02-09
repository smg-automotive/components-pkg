import React, { PropsWithChildren } from 'react';

import { Box as BoxComponents, BoxProps } from 'src/components/box';

type As = React.ElementType;

type Props<E extends As = 'div'> = BoxProps & {
  textColor?: BoxProps['color'];
  ref?: React.Ref<unknown>;
  spacing?: BoxProps['gap'];
  as?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'children'>;

export const Box: React.FC<PropsWithChildren<Props>> = (props) => {
  const { as, textColor, spacing, color, children, ...rest } = props;

  if (!as) {
    return (
      <BoxComponents
        {...(color ? { color } : {})}
        {...(textColor ? { color: textColor } : {})}
        {...(spacing ? { gap: spacing } : {})}
        {...rest}
        ref={props.ref} // TODO Forward ref
      />
    );
  }

  const AsComp = as as As; // TODO not always going to work, needs testing

  return (
    <BoxComponents {...rest} asChild>
      <AsComp>{children}</AsComp>
    </BoxComponents>
  );
};
