import React from 'react';

import { Box as BoxComponents, BoxProps } from '@/src/components/box';

type ElementType = React.ElementType;
type PropsOf<E extends ElementType> = React.ComponentPropsWithoutRef<E>;

type PolymorphicProps<
  E extends ElementType,
  OwnProps extends object,
> = OwnProps & { as?: E } & Omit<
    PropsOf<E>,
    keyof OwnProps | 'as' | 'children'
  >;

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
  const {
    as,
    textColor,
    spacing,
    color,
    sx,
    children,

    // Link-like props, e.g. NextLink
    href,
    prefetch,

    ...rest
  } = props;

  const boxProps = {
    ...rest,
    sx,
    ...(color !== undefined ? { color } : {}),
    ...(textColor !== undefined ? { color: textColor } : {}),
    ...(spacing !== undefined ? { gap: spacing } : {}),

    // Important: keep href on string elements like as="a"
    ...(typeof as === 'string' && href !== undefined ? { href } : {}),

    // Avoid passing prefetch to native DOM elements like <a>
    ...(typeof as !== 'string' && prefetch !== undefined ? { prefetch } : {}),
  };

  const isLinkLike =
    as !== undefined &&
    typeof as !== 'string' &&
    (href !== undefined || prefetch !== undefined);

  if (!as) {
    return (
      <BoxComponents {...boxProps} ref={ref}>
        {children}
      </BoxComponents>
    );
  }

  const AsComp = as as ElementType;

  if (isLinkLike) {
    return (
      <BoxComponents {...boxProps} asChild ref={ref}>
        <AsComp
          {...(href !== undefined ? { href } : {})}
          {...(prefetch !== undefined ? { prefetch } : {})}
        >
          {children}
        </AsComp>
      </BoxComponents>
    );
  }

  return (
    <BoxComponents {...boxProps} as={AsComp} ref={ref}>
      {children}
    </BoxComponents>
  );
}) as <E extends ElementType = 'div'>(
  props: BoxAdapterProps<E> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null;
