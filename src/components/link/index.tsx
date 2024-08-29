import React, { forwardRef, ReactNode, useMemo } from 'react';

import {
  ButtonProps,
  chakra,
  LinkProps as ChakraLinkProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

/*
Props : {
  replace?: boolean;
  prefetch?: boolean;
}

These props are needed because of NextLink passed to Link through 'as' prop.
* */

interface Props extends Partial<Omit<ChakraLinkProps, 'href' | 'onClick'>> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  href?: string | ReactNode | null;
  onClick?: ButtonProps['onClick'] | ((e: MouseEvent) => void) | null;
  to?: string;
  replace?: boolean;
  prefetch?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      as = chakra.a,
      children,
      isExternal = false,
      rel,
      target,
      leftIcon,
      rightIcon,
      variant = 'baseLink',
      fontWeight = 'regular',
      ...rest
    },
    ref,
  ) => {
    const styles = useMultiStyleConfig('Link', { variant });

    const Component = useMemo(() => {
      return chakra(as, {
        baseStyle: styles.link,
      });
    }, [as, styles.link]);

    const textStyle = {
      ...(leftIcon ? styles.leftIcon : {}),
      ...(rightIcon ? styles.rightIcon : {}),
    };

    return (
      <Component
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        ref={ref}
        fontWeight={fontWeight}
        {...rest}
      >
        {leftIcon}
        <chakra.span __css={textStyle}>{children}</chakra.span>
        {rightIcon}
      </Component>
    );
  },
);
Link.displayName = 'Link';

export default Link;
export { Props as LinkProps };
