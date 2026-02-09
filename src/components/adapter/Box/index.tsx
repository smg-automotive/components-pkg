import React from 'react';

import { Box as BoxComponents, BoxProps } from 'src/components/box';

type ElementType = React.ElementType;

type PropsOf<E extends ElementType> = React.ComponentPropsWithoutRef<E>;

type PolymorphicProps<
  E extends ElementType,
  OwnProps extends object,
> = OwnProps & { as?: E } & Omit<
    PropsOf<E>,
    keyof OwnProps | 'as' | 'children'
  >;

type Props = BoxProps & {
  textColor?: BoxProps['color'];
  ref?: React.Ref<unknown>;
  spacing?: BoxProps['gap'];
};

export type BoxAdapterProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  Props
>;

export const Box = React.forwardRef(function BoxAdapter<
  E extends ElementType = 'div',
>(props: BoxAdapterProps<E>, ref: React.ForwardedRef<unknown>) {
  const { as, textColor, spacing, color, children, ...rest } = props;

  if (!as) {
    return (
      <BoxComponents
        {...(color ? { color } : {})}
        {...(textColor ? { color: textColor } : {})}
        {...(spacing ? { gap: spacing } : {})}
        {...rest}
        ref={ref}
      />
    );
  }

  const AsComp = as as ElementType; // TODO not always going to work, needs testing

  return (
    <BoxComponents {...rest} asChild ref={ref}>
      <AsComp>{children}</AsComp>
    </BoxComponents>
  );
}) as <E extends ElementType = 'div'>(
  props: BoxAdapterProps<E> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null;
