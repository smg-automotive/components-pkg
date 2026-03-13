import React, { FC } from 'react';

import {
  LinkBox,
  LinkBoxProps,
  LinkOverlay as LinkOverlayComponents,
  LinkOverlayProps as LinkOverlayPropsComponents,
} from 'src/components/linkOverlay';

type LinkOverlayProps = LinkOverlayPropsComponents & {
  prefetch?: boolean;
};

const LinkOverlay: FC<LinkOverlayProps> = ({ prefetch, as, href, ...rest }) => {
  const isComponentAs = Boolean(as) && typeof as !== 'string';
  const isNextLinkCompat = isComponentAs && prefetch !== undefined;

  if (isNextLinkCompat) {
    const AsComp = as as React.ElementType;
    return (
      <LinkOverlayComponents asChild {...rest}>
        <AsComp href={href} prefetch={prefetch} />
      </LinkOverlayComponents>
    );
  }
  return <LinkOverlayComponents href={href} {...rest} />;
};

export { LinkOverlay, LinkBox };
export type { LinkBoxProps, LinkOverlayProps };
