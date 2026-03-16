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

/** Public adapter props:
 * - do NOT expose `css` (compat layer is sx-only)
 * - keep textColor/spacing mappings
 */
type Props = Omit<BoxProps, 'color'> & {
  textColor?: BoxProps['color'];
  spacing?: BoxProps['gap'];
};

export type BoxAdapterProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  Props
>;

export const Box = React.forwardRef(function BoxAdapter<
  E extends ElementType = 'div',
>(props: BoxAdapterProps<E>, ref: React.ForwardedRef<unknown>) {
  const { as, textColor, spacing, color, sx, children, ...rest } = props;

  if (!as) {
    return (
      <BoxComponents
        {...rest}
        {...(color ? { color } : {})}
        {...(textColor ? { color: textColor } : {})}
        {...(spacing ? { gap: spacing } : {})}
        ref={ref}
      >
        {children}
      </BoxComponents>
    );
  }

  const AsComp = as as ElementType; // relies on your existing approach

  return (
    <BoxComponents {...props} asChild ref={ref}>
      <AsComp>{children}</AsComp>
    </BoxComponents>
  );
}) as <E extends ElementType = 'div'>(
  props: BoxAdapterProps<E> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null;
