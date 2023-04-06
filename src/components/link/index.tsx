import React, {
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  as?: ElementType;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isExternal?: boolean;
  rel?: string;
  variant?: 'baseLink' | 'navigationLink' | 'subNavigationLink';
  [key: string]: unknown;
  fontWeight?: 'regular' | 'bold';
  color?: string;
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
      variant = 'baseLink',
      fontWeight = 'regular',
      ...rest
    },
    ref
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
        target={isExternal ? '_blank' : undefined}
        rel={rel || isExternal ? 'noopener noreferrer' : undefined}
        ref={ref}
        {...rest}
        fontWeight={fontWeight}
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
