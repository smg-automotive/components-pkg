import React, { ElementType, forwardRef, ReactNode, useMemo } from 'react';

import {
  chakra,
  LinkProps as ChakraLinkProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface Props extends Partial<ChakraLinkProps> {
  children: ReactNode;
  as?: ElementType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rel?: string;
  target?: string;
  variant?: 'baseLink' | 'navigationLink' | 'subNavigationLink' | 'footerLink';
  fontWeight?: 'regular' | 'bold';
  ariaLabel?: string;
  color?: string;
  disabled?: boolean;
  to?: string;
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
      ariaLabel,
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
        aria-label={ariaLabel}
        {...rest}
        fontWeight={fontWeight}
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
