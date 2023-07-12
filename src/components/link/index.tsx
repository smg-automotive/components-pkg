import React, {
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';

import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import Flex from '../flex';

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
      <Flex>
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
      </Flex>
    );
  }
);
Link.displayName = 'Link';

export default Link;
export { Props as LinkProps };
