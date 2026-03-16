import React, { FC, PropsWithChildren } from 'react';

import {
  LinkBox,
  LinkBoxProps,
  LinkOverlay as LinkOverlayComponents,
  LinkOverlayProps as LinkOverlayPropsComponents,
} from 'src/components/linkOverlay';

type LinkOverlayProps = LinkOverlayPropsComponents & {
  prefetch?: boolean;
};
const LinkOverlay: FC<PropsWithChildren<LinkOverlayProps>> = ({
  prefetch,
  as,
  href,
  children,
  ...rest
}) => {
  const isComponentAs = Boolean(as) && typeof as !== 'string';
  const isNextLinkCompat = isComponentAs && prefetch !== undefined;

  if (isNextLinkCompat) {
    const AsComp = as as React.ElementType;
    return (
      <LinkOverlayComponents asChild {...rest}>
        <AsComp href={href} prefetch={prefetch}>
          {children}
        </AsComp>
      </LinkOverlayComponents>
    );
  }
  return (
    <LinkOverlayComponents href={href} {...rest}>
      {children}
    </LinkOverlayComponents>
  );
};

export { LinkOverlay, LinkBox };
export type { LinkBoxProps, LinkOverlayProps };
