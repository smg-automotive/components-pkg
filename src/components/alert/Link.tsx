import React, { FC } from 'react';

import { Link } from '../link';

import { AlertProps } from '.';

type Props = NonNullable<AlertProps['link']>;

export const AlertLink: FC<Props> = ({ text, ...props }) => {
  const linkProps =
    props?.as === 'button'
      ? {
          ...props,
          textAlign: 'left' as const,
        }
      : {
          ...props,
          as: props?.as === 'link' ? 'a' : props?.as,
          href: props?.url,
        };

  return (
    <Link {...linkProps} display="inline-block">
      {text}
    </Link>
  );
};
