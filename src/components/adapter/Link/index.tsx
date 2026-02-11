import React, { FC, PropsWithChildren } from 'react';

import { Link as ComponentsLink, LinkProps } from 'src/components/link';

type Props = LinkProps & {
  prefetch?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Link: FC<PropsWithChildren<Props>> = ({
  as,
  prefetch,
  leftIcon,
  rightIcon,
  children,
  href,
  ...rest
}) => {
  const isComponentAs = Boolean(as) && typeof as !== 'string';
  const isNextLinkCompat = isComponentAs && prefetch !== undefined;

  if (isNextLinkCompat) {
    const AsComp = as as React.ElementType;

    return (
      <ComponentsLink {...rest} asChild>
        <AsComp href={href} prefetch={prefetch}>
          {leftIcon ? leftIcon : null}
          {children}
          {rightIcon ? rightIcon : null}
        </AsComp>
      </ComponentsLink>
    );
  }

  return (
    <ComponentsLink {...rest} as={as} href={href}>
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </ComponentsLink>
  );
};
