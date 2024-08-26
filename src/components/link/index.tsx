import React, { ElementType, forwardRef, ReactNode, useMemo } from 'react';

import {
  InteractivityProps,
  PositionProps,
  SpaceProps,
  TextDecorationProps,
} from '@chakra-ui/styled-system';
import {
  ButtonProps,
  chakra,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  OtherProps,
  TypographyProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface Props {
  children?: ReactNode;
  as?: ElementType;
  isExternal?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rel?: string;
  target?: string;
  variant?:
    | 'baseLink'
    | 'navigationLink'
    | 'subNavigationLink'
    | 'footerLink'
    | 'link'
    | 'primary'
    | 'secondary'
    | undefined;
  fontWeight?: TypographyProps['fontWeight'];
  ariaLabel?: string;
  color?: string;
  disabled?: boolean;
  to?: string;
  href?: string | ReactNode | null;
  onClick?: ButtonProps['onClick'] | null;
  prefetch?: boolean;
  order?: FlexboxProps['order'];
  zIndex?: PositionProps['zIndex'];
  top?: PositionProps['top'];
  fontSize?: TypographyProps['fontSize'];
  textDecoration?: TextDecorationProps['textDecoration'];
  alignSelf?: FlexboxProps['alignSelf'];
  overflowX?: LayoutProps['overflowX'];
  mx?: SpaceProps['mx'];
  marginX?: SpaceProps['mx'];
  mt?: SpaceProps['mt'];
  ml?: SpaceProps['ml'];
  marginTop?: SpaceProps['mt'];
  padding?: SpaceProps['padding'];
  paddingX?: SpaceProps['paddingX'];
  position?: PositionProps['position'];
  pointerEvents?: InteractivityProps['pointerEvents'];
  alignItems?: FlexboxProps['alignItems'];
  flexShrink?: FlexboxProps['flexShrink'];
  justifyContent?: FlexboxProps['justifyContent'];
  textAlign?: TypographyProps['textAlign'];
  textColor?: ColorProps['textColor'];
  whiteSpace?: TypographyProps['whiteSpace'];
  wordBreak?: TypographyProps['wordBreak'];
  noOfLines?: TypographyProps['noOfLines'];
  textOverflow?: TypographyProps['textOverflow'];
  textStyle?: OtherProps['textStyle'];
  display?: LayoutProps['display'];
  width?: LayoutProps['width'];
  w?: LayoutProps['width'];
  type?: ButtonProps['type'];
  replace?: boolean;
  role?: Pick<React.HTMLAttributes<HTMLDivElement>, 'role'>;
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
