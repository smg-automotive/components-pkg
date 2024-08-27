import React, { forwardRef, ReactNode } from 'react';

import {
  chakra,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface Props extends Partial<ChakraLinkProps> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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

    const textStyle = {
      ...(leftIcon ? styles.leftIcon : {}),
      ...(rightIcon ? styles.rightIcon : {}),
    };

    return (
      <ChakraLink
        as={as}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        ref={ref}
        fontWeight={fontWeight}
        {...rest}
      >
        {leftIcon}
        <chakra.span __css={textStyle}>{children}</chakra.span>
        {rightIcon}
      </ChakraLink>
    );
  },
);
Link.displayName = 'Link';

export default Link;
export { Props as LinkProps };
