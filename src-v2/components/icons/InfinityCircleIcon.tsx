import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const InfinityCircleIcon: ComponentWithAs<'svg', IconProps> = createIcon(
  {
    displayName: 'InfinityCircle',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Infinity circle icon</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 24c6.075 0 11-4.925 11-11S18.075 2 12 2 1 6.925 1 13s4.925 11 11 11m0-2a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.001 11.684c-.492-.402-1.19-.935-1.872-1.326-.674-.386-1.35-.62-1.866-.62A3.267 3.267 0 0 0 5 13a3.266 3.266 0 0 0 3.263 3.262c.516 0 1.192-.235 1.866-.62.682-.392 1.38-.925 1.872-1.327.493.402 1.19.935 1.872 1.326.673.386 1.349.621 1.864.621A3.267 3.267 0 0 0 19 13a3.266 3.266 0 0 0-3.263-3.263c-.515 0-1.191.235-1.864.621-.682.391-1.379.924-1.872 1.326M10.448 13c-.261.205-.561.427-.871.633-.472.312-.949.63-1.314.63a1.262 1.262 0 1 1 0-2.526c.365 0 .842.318 1.314.63.31.206.609.428.871.633m3.107 0c.261-.205.561-.427.871-.633.471-.312.947-.63 1.311-.63a1.262 1.262 0 1 1 0 2.526c-.364 0-.84-.318-1.311-.63-.31-.206-.61-.428-.871-.633"
          clipRule="evenodd"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  },
);
