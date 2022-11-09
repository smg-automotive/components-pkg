import React, { ElementType, forwardRef, ReactElement, ReactNode } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  as?: ElementType;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isExternal?: boolean;
  rel?: string;
  [key: string]: unknown;
}

const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      as = chakra.a,
      children,
      isExternal = false,
      rel,
      leftIcon,
      rightIcon,
      ...rest
    },
    ref
  ) => {
    const styles = useMultiStyleConfig(`Link`);

    const Component = chakra(as, {
      baseStyle: styles.link,
    });

    const textStyle = {
      ...(leftIcon ? styles.leftIcon : {}),
      ...(rightIcon ? styles.rightIcon : {}),
    };

    return (
      <Component
        target={isExternal ? '_blank' : undefined}
        rel={rel || isExternal ? 'noopener noreferrer' : undefined}
        ref={ref}
        {...rest}
      >
        {leftIcon}
        <chakra.span __css={textStyle}>{children}</chakra.span>
        {rightIcon}
      </Component>
    );
  }
);
Link.displayName = 'Link';

export default Link;
export { Props as LinkProps };
