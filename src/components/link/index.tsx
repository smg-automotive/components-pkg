import React, {
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';

import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Box from '../box';

interface Props {
  children: ReactNode;
  as?: ElementType;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isExternal?: boolean;
  rel?: string;
  target?: string;
  variant?: 'baseLink' | 'navigationLink' | 'subNavigationLink';
  [key: string]: unknown;
  fontWeight?: 'regular' | 'bold';
  ariaLabel?: string;
  color?: string;
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
      <Box>
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
      </Box>
    );
  }
);
Link.displayName = 'Link';

export default Link;
export { Props as LinkProps };
