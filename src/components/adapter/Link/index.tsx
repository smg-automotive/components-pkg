import React, { FC, PropsWithChildren } from 'react';

import { Link as ComponentsLink, LinkProps } from 'src/components/link';

type Props = Omit<LinkProps, 'lineClamp' | 'href' | 'onClick' | 'truncate'> & {
  prefetch?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  noOfLines?: number;
  href?: string | undefined | null;
  isTruncated?: LinkProps['truncate'];
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined | null;
  textColor?: LinkProps['color'];
};

export const Link: FC<PropsWithChildren<Props>> = ({
  as,
  prefetch,
  leftIcon,
  rightIcon,
  children,
  href,
  noOfLines,
  onClick,
  isTruncated,
  textColor,
  ...rest
}) => {
  const isComponentAs = Boolean(as) && typeof as !== 'string';
  const isNextLinkCompat = isComponentAs && prefetch !== undefined;

  if (isNextLinkCompat) {
    const AsComp = as as React.ElementType;

    return (
      <ComponentsLink
        {...rest}
        asChild
        lineClamp={noOfLines}
        onClick={onClick ?? undefined}
        truncate={isTruncated}
        {...(textColor ? { color: textColor } : {})}
      >
        <AsComp href={href} prefetch={prefetch}>
          {leftIcon ? leftIcon : null}
          {children}
          {rightIcon ? rightIcon : null}
        </AsComp>
      </ComponentsLink>
    );
  }

  return (
    <ComponentsLink
      {...rest}
      as={as}
      href={href ?? undefined}
      lineClamp={noOfLines}
      onClick={onClick ?? undefined}
      truncate={isTruncated}
      {...(textColor ? { color: textColor } : {})}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </ComponentsLink>
  );
};
