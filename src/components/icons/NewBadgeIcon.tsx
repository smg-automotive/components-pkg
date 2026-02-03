import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const NewBadgeIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'New Badge',
  viewBox: '0 0 34 19',
  path: (
    <>
      <title>New Badge</title>
      <path fill="#f5f200" d="M0 0h34v19H0z"/>
      <path fill="currentColor" d="M21.434 14 19.25 6.02h1.476l1.476 6.3h.023l1.608-5.1h1.333l1.631 5.1h.024l1.464-6.3h1.428L27.542 14h-1.5l-1.547-4.896h-.024L22.91 14zM14.424 12.86h4.02V14h-5.388V6.02h5.292v1.152h-3.924v2.16h3.684v1.116h-3.684zM4.888 14V6.02h1.32L10 11.936h.024V6.02h1.26V14h-1.32L6.172 8.084h-.024V14z"/>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
